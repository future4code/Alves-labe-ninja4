import styled from "styled-components";
import React, { Component } from 'react'
import{Button, ButtonGroup} from '@chakra-ui/react'
import { DivCardProdutos } from "./Styled";


export default class CardProdutos extends Component {

    render() {

        return (
            <DivCardProdutos>
                <div>
                    <h2>Serviço: {this.props.title}</h2>
                    <h2>Descrição: {this.props.description}</h2>
                    <h2>Preço: {this.props.price}</h2>
                    <h2>Metodo de Pagamento: {this.props.paymentMethods.map((pagamento) => {
                        return pagamento + ", "
                    })}</h2>
                    <h2>Data de expiração: {this.props.dueDate}</h2>
                    <Button colorScheme='orange' size='sm'>Comprar!</Button>
                </div>
            </DivCardProdutos>
        )
    }
}
