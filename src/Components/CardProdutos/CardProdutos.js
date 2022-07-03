import React, { Component } from 'react'
import{Button, ButtonGroup} from '@chakra-ui/react'
import { DivCardProdutos, SpanCategorias } from "./Styled";
import ShoppingCartItem from '../ShoppingCartPage/ShoppingCartItem/ShoppingCartItem';


export default class CardProdutos extends Component {

    render() {
        <ShoppingCartItem
        id={this.props.id}></ShoppingCartItem>
        return (
            <DivCardProdutos>
                <div>
                    <h2><SpanCategorias>Serviço:</SpanCategorias> {this.props.title}</h2>
                    <h2><SpanCategorias>Descrição:</SpanCategorias> {this.props.description}</h2>
                    <h2><SpanCategorias>Preço:</SpanCategorias> {this.props.price}</h2>
                    <h2><SpanCategorias>Metodos de Pagamento:</SpanCategorias> {this.props.paymentMethods.map((pagamento) => {
                        return pagamento + ", "
                    })}</h2>
                    <h2><SpanCategorias>Data de expiração:</SpanCategorias> {this.props.dueDate}</h2>
                    <Button onClick={ () => this.props.addCartItem(this.props.id)} colorScheme='orange' size='sm'>Adicionar ao Carrinho</Button>
                </div>
            </DivCardProdutos>
        )
    }
}
