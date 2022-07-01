import React, { Component } from 'react'
import axios from "axios"
import CardProdutos from "../CardProdutos/CardProdutos"
import { Select } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { DivDisplayProdutos, DivSelects } from "./Styled"
import { Alert } from 'reactstrap'

export default class TelaProdutos extends Component {
    state = {
        produtos: [],
        inputBuscaPorNome: "",
        valorMinimo: "",
        valorMaximo: "",
        parametroOrdenacão: "",
        itensNoCarrinho: []
    }

    componentDidMount() {
        this.pegarProdutos()
    }

    addCartItem = (itemId) => {
        const itemNoCarrinho = this.state.itensNoCarrinho.find(
            (item) => itemId === item.id
        );
        if (itemNoCarrinho) {
            const novosItensCarrinho = this.state.itensNoCarrinho.map((item) => {
                if (itemId === item.id) {
                    return {
                        ...item,
                        quantidade: item.quantidade + 1
                    };
                }
                return item
            });
            this.setState({ itensNoCarrinho: novosItensCarrinho });
            console.log(novosItensCarrinho)
            localStorage.setItem("lista", JSON.stringify(novosItensCarrinho))
        } else {
            const itemAdicionado = this.state.produtos.find(
                (item) => itemId === item.id
            );

            const novosItensCarrinho = [
                ...this.state.itensNoCarrinho,
                { ...itemAdicionado, quantidade: 1},
            ];
            console.log(novosItensCarrinho);
            this.setState({ itensNoCarrinho: novosItensCarrinho })
            localStorage.setItem("lista", JSON.stringify(novosItensCarrinho))
        }
    }

    pegarProdutos = () => {
        const key = 'b49b15f4-f303-4ea9-a198-4107c3effc69'

        axios
            .get(
                `https://labeninjas.herokuapp.com/jobs`,
                {
                    headers: {
                        Authorization: `${key}`
                    }
                }
            )
            .then((res) => {
                this.setState({ produtos: res.data.jobs })
            })
            .catch((error) => {
                Alert(error.response)
            })
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
                    {this.state.produtos.filter((produto) => {
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
                                id={produto.id}
                                title={produto.title}
                                description={produto.description}
                                dueDate={produto.dueDate.split("T")[0]}
                                price={produto.price.toLocaleString(
                                    "pt-BR",
                                    { style: "currency", currency: "BRL" }
                                )}
                                paymentMethods={produto.paymentMethods} 
                                addCartItem={ () => this.addCartItem(produto.id)}/>

                        })}
                </DivDisplayProdutos>
            </div>
        )
    }
}
