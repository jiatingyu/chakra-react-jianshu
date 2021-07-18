import { Box, Button, AspectRatio, Flex } from '@chakra-ui/core'
import Header from './component/Header'
import Content from './component/Content'
function App () {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      w='100%'
      h='100vh'
      bgColor='gray.100'
    >
      <Header></Header>
      <Content />
    </Flex>
  )
}

export default App
