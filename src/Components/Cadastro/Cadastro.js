import React, { Component } from 'react'
import { chakra, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, } from '@chakra-ui/react'
import { H1Cadastro } from './Styled'
import { Alert } from 'reactstrap'

export default class Cadastro extends Component {
    state = {
        produtos: [],
        title: "",
        description: "",
        price: "",
        paymentMethods: [],
        dueDate: "",
    }

    handleTitle = (e) => {
        this.setState({ title: e.target.value })
    }

    handleDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    handlePrice = (e) => {
        this.setState({ price: e.target.valueAsNumber })
        console.log(this.state.price)
    }

    handlePaymentMethods = (e) => {
        this.setState({ paymentMethods: [...this.state.paymentMethods, e.target.value] })
        console.log(this.state.paymentMethods)
    }

    handleDueDate = (e) => {
        const novaData = e.target.value.split("T")
        console.log(novaData)

        this.setState({ dueDate: novaData[0] })
        console.log(this.state.dueDate)
    }


    CadastraServiço = () => {

        const body = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            paymentMethods: this.state.paymentMethods,
            dueDate: this.state.dueDate,
        }
        const key = 'b49b15f4-f303-4ea9-a198-4107c3effc69'

        axios
            .post(
                `https://labeninjas.herokuapp.com/jobs`,
                body,
                {
                    headers: {
                        Authorization: `${key}`
                    }
                }
            )
            .then((res) => {
                alert("Seu serviço foi cadastrado com sucesso")
                console.log(res)
            })
            .catch((error) => {
                Alert(error.response)
                console.log(error)
            })
    }



    render() {

        return (
            <div>
                <H1Cadastro>Cadastre o seu serviço</H1Cadastro>
                <Stack spacing={5}>
                    <Input value={this.state.title} onChange={this.handleTitle} focusBorderColor='orange.300' variant='outline'
                        _placeholder={{ opacity: 1, color: 'gray.500' }} placeholder='Titulo' size='md' />
                    <Input value={this.state.description} onChange={this.handleDescription} focusBorderColor='orange.300' variant='outline'
                        _placeholder={{ opacity: 1, color: 'gray.500' }} placeholder='Descrição' size='md' />

                    <Input value={this.state.price} onChange={this.handlePrice} type='number' focusBorderColor='orange.300' variant='outline'
                        _placeholder={{ opacity: 1, color: 'gray.500' }} placeholder='Preço' size='md' />
                    <Select multiple={false} onChange={this.handlePaymentMethods} focusBorderColor='orange.300' _placeholder={{ opacity: 0.7, color: 'gray.500' }}
                        placeholder='Opção de Pagamento'>
                        <option value='Cartão de Crédito'>Cartão de Crédito</option>
                        <option value='Cartão de Debito'>Cartão de Debito</option>
                        <option value='Pix'>Pix</option>
                    </Select>
                    <Text mb='6px'>Prazo: </Text>
                    <Input value={this.state.dueDate} onChange={this.handleDueDate} focusBorderColor='orange.300' type='date' variant='outline'
                        _placeholder={{ opacity: 1, color: 'gray.500' }} placeholder='Expiração' size='md' />
                    <Button onClick={this.CadastraServiço} colorScheme='orange'>CADASTRAR</Button>
                </Stack>


            </div >
        )
    }
}
