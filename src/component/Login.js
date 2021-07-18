import {
  Box,
  Heading,
  Input,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
  Flex,
  Text,
  Checkbox
} from '@chakra-ui/core'
import { FaUserAlt } from 'react-icons/fa'
import useFormField from '../hooks/useFormField'
import { useState } from 'react'
import {
  AiFillLock,
  AiOutlineQq,
  AiFillZhihuCircle,
  AiFillWeiboCircle
} from 'react-icons/ai'

import request from '../utils/request'
export default function Login () {
  let userName = useFormField('')
  let password = useFormField('')
  let [error, setError] = useState('')
  async function submit (e) {
    e.preventDefault()
    let obj = {
      email: userName.value,
      password: password.value
    }
    console.log(obj)
    // 发送请求
    try {
      let { data } = await request({
        url: '/api/users/login',
        method: 'post',
        data: { user: obj }
      })
      setError('登录成功')
    } catch (error) {
      console.log('error :>> ', error)
      let { errors } = JSON.parse(error.message)
      let message = Object.keys(errors).reduce(
        (accumulate, key) => (accumulate += key + errors[key]),
        ''
      )
      setError(message)
    }
  }
  return (
    <>
      {error ? <Text color='red'>{error}</Text> : ''}
      <form onSubmit={submit}>
        <Stack spacing='4'>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<FaUserAlt color='gray.300' />}
            ></InputLeftElement>
            <Input placeholder='请输入邮箱' name='username' {...userName} />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<AiFillLock color='gray.300' />}
            ></InputLeftElement>
            <Input
              type='password'
              placeholder='请输入密码'
              name='password'
              {...password}
            />
          </InputGroup>

          <Flex justifyContent='space-between'>
            <Stack>
              <Checkbox defaultChecked>记住我</Checkbox>
            </Stack>
            <Text _hover={{ color: 'black' }} color='gray.500'>
              登录遇到问题?
            </Text>
          </Flex>

          <Button
            borderRadius='20px'
            bg='blue.300'
            _hover={{ bg: 'blue.500' }}
            type='submit'
          >
            登录
          </Button>

          <div className='otherWay'>社交帐号登录</div>

          <Stack spacing='5' direction='row' justify='center'>
            <Text>
              <AiFillWeiboCircle size='30px' color='red' />
            </Text>
            <Text>
              <AiFillZhihuCircle size='30px' color='blue' />
            </Text>
            <Text>
              <AiOutlineQq size='30px' color='#498ad3' />
            </Text>
          </Stack>
        </Stack>
      </form>
    </>
  )
}
