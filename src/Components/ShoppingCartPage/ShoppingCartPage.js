import React from "react";
import { CartContainer } from "./styled";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem"
import { H1Titulo, SpanPreço } from "./styled";

export default class ShoppingCartPage extends React.Component {
      
    
    render() {
        const Items = this.props.cartItens.map(item => {
            return <ShoppingCartItem 
                key={item.id}
                quantidade={item.quantidade}
                title={item.title}
                removerItem={this.props.removerItem}
                price={item.price}
            />
        })



        return (
            <CartContainer>
                <H1Titulo>Carrinho de Compras</H1Titulo>
                    {Items}
                <H1Titulo>Valor total: <SpanPreço>{this.props.valorTotal()}</SpanPreço></H1Titulo>
            </CartContainer>
        )
    }
}


