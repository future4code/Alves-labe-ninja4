import React from "react";
import { CartContainer } from "./styled";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem"

export default class ShoppingCartPage extends React.Component {
      
    
    render() {
        const Items = this.props.cartItens.map(item => {
            return <ShoppingCartItem 
                quantidade={item.quantidade}
                title={item.title}
                removerItem={this.props.removerItem}
                price={item.price}
            />
        })



        return (
            <CartContainer>
                <h2>Carrinho:</h2>
                    {Items}
                <p>Valor total: {this.props.valorTotal()}</p>
            </CartContainer>
        )
    }
}


