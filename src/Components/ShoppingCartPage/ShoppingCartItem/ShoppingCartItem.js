import { CartItemCard, SpanCategorias, StyledHr } from "./styled";
import React from "react";

class ShoppingCartItem extends React.Component {
    render() {
      return (
        <CartItemCard>
          <p><SpanCategorias>Produto:</SpanCategorias> {this.props.title}</p>
          <p><SpanCategorias>Quantidade:</SpanCategorias> {this.props.quantidade}x</p>
          <p><SpanCategorias>Preço:</SpanCategorias>{this.props.price.toLocaleString(
                                    "pt-BR",
                                    { style: "currency", currency: "BRL" }
                                )}</p>
          {/* <button onClick={() => this.props.removerItem(this.props.id)}>Remover</button> */}
          <br/>
          <br></br>
          <StyledHr></StyledHr>
        </CartItemCard>
      );
    }
  }
  
  export default ShoppingCartItem;