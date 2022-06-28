import React, { Component } from 'react'
import "./body.css"
import{Button, ButtonGroup} from '@chakra-ui/react'
import styled from 'styled-components'
import { Stack, HStack, VStack } from '@chakra-ui/react'



export default class body extends Component {
  render() {
    return (
    
     <div className='imgLB'>
        <img src="./img/ninja2.svg"/>
        <h1>LabeNinjas</h1>
        <Stack spacing={8} direction='row' align='center'>
        <Button colorScheme='orange'>Cadastrar</Button>
        <Button colorScheme='orange'>Contratar</Button>
        </Stack>
     </div>
    
    )
  }
}





