import React from "react";
import { CartItemCard } from "./ShoppingCartItem/styles";
import { CartContainer } from "./styles";
//import { Item } from "./Item"

export default class ShoppingCartPage extends React.Component {
      
    
    render() {
        Const items = this.props.cartItens && this.props.cartItens.map(item => {
            return <CartItemCard 
                nome={item.name}
                quantidade={item.quantidade}
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


