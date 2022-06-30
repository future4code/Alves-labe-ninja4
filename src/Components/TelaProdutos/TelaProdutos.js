import styled from "styled-components"
import React, { Component } from 'react'
import axios from "axios"
import CardProdutos from "../CardProdutos/CardProdutos"
import { Select } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'

const DivDisplayProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 10px;`

const DivSelects = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  align-items: center;
  gap: 50px;
  margin: 0 auto;
  `


export default class TelaProdutos extends Component {
    state = {
        produtos: [],
    }

    componentDidMount() {
        this.pegarProdutos()
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
                console.log(this.state.produtos)
                console.log(this.state.produtos.dueDate)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    render() {
        return (
            <div>
                <DivSelects>
                    <Select placeholder='Ordenar Por'>
                        <option value='Crescente'>Option 1</option>
                        <option value='Decrescente'>Option 2</option>
                    </Select>

                    <InputGroup>
                        <InputLeftAddon children='Valor Minimo' />
                        <Input focusBorderColor='orange.300' type='tel' placeholder='R$' />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftAddon children='Valor Maximo' />
                        <Input focusBorderColor='orange.300' type='tel' placeholder='R$' />
                    </InputGroup>


                </DivSelects>

                <DivDisplayProdutos>
                    {this.state.produtos.map((produto) => {
                        return <CardProdutos
                            id={produto.id}
                            title={produto.title}
                            description={produto.description}
                            dueDate={produto.dueDate.split("T")[0]}
                            price={produto.price.toLocaleString(
                                "pt-BR",
                                { style: "currency", currency: "BRL" }
                            )}
                            paymentMethods={produto.paymentMethods} />

                    })}
                </DivDisplayProdutos>
            </div>
        )
    }
}
