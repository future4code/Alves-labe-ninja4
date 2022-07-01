import { CartItemCard } from "./styled";
import React from "react";

class ShoppingCartItem extends React.Component {
    render() {
      return (
        <CartItemCard>
          <p>Produto: {this.props.title}</p>
          <p>Quantidade: {this.props.quantidade}x</p>
          <p>Preço:{this.props.price.toLocaleString(
                                    "pt-BR",
                                    { style: "currency", currency: "BRL" }
                                )}</p>
          <button onClick={() => this.props.removerItem(this.props.id)}>Remover</button>
        </CartItemCard>
      );
    }
  }
  
  export default ShoppingCartItem;