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
import {
  AiFillLock,
  AiOutlineQq,
  AiFillZhihuCircle,
  AiFillWeiboCircle,
  AiTwotoneMail
} from 'react-icons/ai'
import { useState } from 'react'
import useFormField from '../hooks/useFormField'
import request from '../utils/request'
export default function Regiter () {
  let userNameField = useFormField('')
  let emailField = useFormField('')
  let passwordField = useFormField('')
  let [error, setError] = useState([])
  async function submit (event) {
    event.preventDefault()
    let obj = {
      username: userNameField.value,
      email: emailField.value,
      password: passwordField.value
    }
    try {
      // 发送请求
      let { data } = await request({
        url: '/api/users',
        method: 'post',
        data: {
          user: obj
        }
      })
      setError(['注册成功'])
    } catch (error) {
      let { errors } = JSON.parse(error.message)
      let message = Object.keys(errors).reduce(
        (accumulate, key) => accumulate.concat(key + errors[key]),
        []
      )
      setError(message)
    }
  }
  return (
    <>
      {error ? (
        <ul>
          {error.map(item => (
            <Text as='li' color='red'>
              {item}
            </Text>
          ))}
        </ul>
      ) : (
        ''
      )}
      <form onSubmit={submit}>
        <Stack spacing='4'>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<FaUserAlt color='gray.300' />}
            ></InputLeftElement>
            <Input placeholder='请输入用户名' {...userNameField} />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<AiTwotoneMail color='gray.300' />}
            ></InputLeftElement>
            <Input variant='outline' placeholder='请输入邮箱' {...emailField} />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<AiFillLock color='gray.300' />}
            ></InputLeftElement>
            <Input
              type='password'
              placeholder='请输入密码'
              {...passwordField}
            />
          </InputGroup>

          <Button
            type='submit'
            borderRadius='20px'
            bg='green.300'
            _hover={{ bg: 'green.500' }}
          >
            注册
          </Button>
          <Text fontSize='12px' color='#969696' textAlign='center'>
            点击 “注册” 即表示您同意并愿意遵守简书
            <Text as='a' href='#' color='skyblue'>
              用户协议
            </Text>
            和
            <Text as='a' href='#' color='skyblue'>
              隐私政策
            </Text>
            。
          </Text>
          <div className='otherWay'>社交帐号直接注册</div>

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
