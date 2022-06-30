import React from "react";
import { CartContainer } from "./styles";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem"

export default class ShoppingCartPage extends React.Component {
      
    
    render() {
        const items = this.props.cartItens && this.props.cartItens.map(item => {
            return <ShoppingCartItem 
                name={item.name}
                quantity={item.quantity}
                onClick={() => this.props.onClick(item)}
            />
        })



        return (
            <CartContainer>
                <h2>Carrinho:</h2>
                    {items}
                <p>Valor total: R$ {this.props.totalValue},00</p>
            </CartContainer>
        )
    }
}


