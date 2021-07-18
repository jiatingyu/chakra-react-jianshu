import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// 需要 chakra-ui
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'
// 原生的
// import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import { theme } from '@chakra-ui/theme'
import './index.css'
const myTheme = extendTheme({
  ...theme,
  colors: {
    jty: {
      50: 'red',
      100: 'yellow',
      150: 'blue'
    }
  }
})
console.log('theme', myTheme)
ReactDOM.render(
  <ChakraProvider theme={myTheme}>
    <CSSReset />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
)
