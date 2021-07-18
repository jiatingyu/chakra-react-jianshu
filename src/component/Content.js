import {
  Box,
  Image,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel
} from '@chakra-ui/core'
import Login from './Login'
import Register from './Register'

export default function Content () {
  return (
    <Box
      w='820px'
      mx='auto'
      h='600'
      bg='url(https://img0.baidu.com/it/u=2151136234,3513236673&fm=26&fmt=auto&gp=0.jpg) no-repeat'
      bgSize='40%'
    >
      <Box bg='white' borderRadius='lg' p='10' float='right' w='400px'>
        <Tabs isFitted defaultIndex={0} colorScheme='#ea6f5a'>
          <TabList mb='2rem'>
            <Tab
              _selected={{
                boxShadow: 'none',
                color: '#ea6f5a ',
                borderColor: 'red'
              }}
            >
              登录
            </Tab>
            <Tab
              _selected={{
                boxShadow: 'none',
                color: '#ea6f5a',
                borderColor: 'red'
              }}
            >
              注册
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Register />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}
