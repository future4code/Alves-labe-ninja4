import React, { Component } from 'react'
import CardProdutos from "../CardProdutos/CardProdutos"
import { Select } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { DivDisplayProdutos, DivSelects } from "./Styled"

export default class TelaProdutos extends Component {
    state = {
        produtos: [],
        inputBuscaPorNome: "",
        valorMinimo: "",
        valorMaximo: "",
        parametroOrdenacão: "",
    }


    onChangeInputBuscaPorNome = (event) => {
        this.setState({ inputBuscaPorNome: event.target.value });
    };
    onChangeInputValorMinimo = (event) => {
        this.setState({ valorMinimo: event.target.value });
    };
    onChangeInputValorMaximo = (event) => {
        this.setState({ valorMaximo: event.target.value });
    };

    onChangeParametroOrdenação = (event) => {
        this.setState({ parametroOrdenacão: event.target.value });
    };


    render() {
        return (
            <div>
                <DivSelects>
                    <Select value={this.state.parametroOrdenacão}
                        onChange={this.onChangeParametroOrdenação}
                        placeholder='Ordenar Por'>
                        <option value={1}>Crescente</option>
                        <option value={-1}>Decrescente</option>
                    </Select>

                    <InputGroup>
                        <InputLeftAddon children='Valor Minimo' />
                        <Input value={this.state.valorMinimo} onChange={this.onChangeInputValorMinimo} focusBorderColor='orange.300' type='number' placeholder='R$' />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftAddon children='Valor Maximo' />
                        <Input value={this.state.valorMaximo} onChange={this.onChangeInputValorMaximo} focusBorderColor='orange.300' type='number' placeholder='R$' />
                    </InputGroup>


                </DivSelects>

                <DivDisplayProdutos>
                    {this.props.produtos.filter((produto) => {
                        return (
                            produto.title
                                .toLowerCase()
                                .includes(this.props.inputBuscaPorNome.toLowerCase()) ||
                            produto.description
                                .toLowerCase()
                                .includes(this.props.inputBuscaPorNome.toLowerCase())
                        );
                    })
                        .filter((produto) => {
                            return (
                                this.state.valorMinimo === "" ||
                                produto.price >= this.state.valorMinimo.toLocaleString(
                                    "pt-BR",
                                    { style: "currency", currency: "BRL" }
                                )
                            );
                        })
                        .filter((produto) => {
                            return (
                                this.state.valorMaximo === "" ||
                                produto.price <= this.state.valorMaximo.toLocaleString(
                                    "pt-BR",
                                    { style: "currency", currency: "BRL" }
                                )
                            )
                        })
                        .sort((produtoAtual, proximoProduto) => {
                            return (
                                this.state.parametroOrdenacão *
                                (produtoAtual.price - proximoProduto.price)
                            )
                        })
                        .map((produto) => {
                            return <CardProdutos
                                key={produto.id}
                                id={produto.id}
                                title={produto.title}
                                description={produto.description}
                                dueDate={produto.dueDate.split("T")[0]}
                                price={produto.price.toLocaleString(
                                    "pt-BR",
                                    { style: "currency", currency: "BRL" }
                                )}
                                paymentMethods={produto.paymentMethods} 
                                addCartItem={this.props.addCartItem}
                                />

                        })}
                </DivDisplayProdutos>
            </div>
        )
    }
}
