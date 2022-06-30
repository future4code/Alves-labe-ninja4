import React, { Component } from 'react'
import{Button, ButtonGroup} from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { DivImg, H1Logo } from './Styled'

export default class BodyHome extends Component {
  render() {
    return (
    
     <DivImg>
        <img src="./img/ninja2.svg" alt='Ninja logo'/>
        <H1Logo>LabeNinjas</H1Logo>
        <Stack spacing={8} direction='row' align='center'>
        <Button colorScheme='orange' onClick={this.props.changePageCadastro}>Cadastrar</Button>
        <Button colorScheme='orange' onClick={this.props.changePageContratar}>Contratar</Button>
        </Stack>
     </DivImg>
    
    )
  }
}





