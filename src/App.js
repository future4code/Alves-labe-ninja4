import React from 'react'
import './App.css'
import Header from './Header/header'
import Body from './Body/body'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "./theme"

class App extends React.Component{

render(){
  return(
    <ChakraProvider theme={theme}>
    
      <Header />,
      <Body />
  
    </ChakraProvider>
  );
}

}

export default App;
