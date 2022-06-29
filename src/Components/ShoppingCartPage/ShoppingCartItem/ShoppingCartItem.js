import { CartItemCard } from "./styles";
import React from "react";

class ShoppingCartItem extends React.Component {
    render() {
      return (
        <CartItemCard>
          <p>{this.props.quantity}x</p>
          <p>{this.props.name}</p>
          <button onClick={this.props.onClick}>Remover</button>
        </CartItemCard>
      );
    }
  }
  
  export default ShoppingCartItem;