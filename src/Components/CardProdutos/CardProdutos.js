import React, { Component } from 'react'
import{Button, ButtonGroup} from '@chakra-ui/react'
import { DivCardProdutos } from "./Styled";
import ShoppingCartItem from '../ShoppingCartPage/ShoppingCartItem/ShoppingCartItem';


export default class CardProdutos extends Component {

    render() {
        <ShoppingCartItem
        id={this.props.id}></ShoppingCartItem>
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
                    <Button onClick={ () => this.props.addCartItem(this.props.id)} colorScheme='orange' size='sm'>Comprar!</Button>
                </div>
            </DivCardProdutos>
        )
    }
}
