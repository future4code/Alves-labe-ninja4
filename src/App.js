import React from 'react'
import Header from './Components/Header/Header'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./theme"
import { GridLayout, Main, Footer, HeaderBackground } from './Components/GridLayout/GridLayout'
import BodyHome from './Components/BodyHomePage/BodyHomePage'
import Cadastro from './Components/Cadastro/Cadastro'
import CardProdutos from './Components/CardProdutos/CardProdutos'
import TelaProdutos from './Components/TelaProdutos/TelaProdutos'
import ShoppingCartPage from './Components/ShoppingCartPage/ShoppingCartPage'
import { Alert } from 'reactstrap'
import axios from "axios"

class App extends React.Component {
  state = {
    produtos: [],
    pagina: "home",
    cart: [],
    totalValue: 0,
    inputBuscaPorNome: "",
    itensNoCarrinho: [],
  }

  componentDidMount() {
    this.pegarProdutos()
  }

  RenderPage = () => {
    switch (this.state.pagina) {
      case "cadastro":
        return <Main>
          <Cadastro />
        </Main>
      case "home":
        return <Main>
          <BodyHome
            changePageCadastro={this.changePageCadastro}
            changePageContratar={this.changePageContratar}
          />
        </Main>
      case "contratar":
        return <TelaProdutos changePageCarrinho={this.changePageCarrinho}
          inputBuscaPorNome={this.state.inputBuscaPorNome}
          onChangeInputBuscaPorNome={this.onChangeInputBuscaPorNome}
          produtos={this.state.produtos}
          addCartItem={this.addCartItem}
          removeCartItem={this.removerItem}>
          <CardProdutos />
        </TelaProdutos >
      case "carrinho":
        return <ShoppingCartPage
          cartItens={this.state.itensNoCarrinho}
          removerItem={() => this.removerItem}
          valorTotal={this.valorTotal}
           />
      default:
        return <div>Error! Page not found.</div>
    }
  }

  changePageCadastro = () => {
    this.setState({ pagina: "cadastro" })
  }

  changePageContratar = () => {
    this.setState({ pagina: "contratar" })
  }

  changePageHome = () => {
    this.setState({ pagina: "home" })
  }

  changePageCarrinho = () => {
    this.setState({ pagina: "carrinho" })
  }


  onChangeInputBuscaPorNome = (event) => {
    this.setState({ inputBuscaPorNome: event.target.value });
  };

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
      // localStorage.setItem("lista", JSON.stringify(novosItensCarrinho)
      // )
    } else {
      const itemAdicionado = this.state.produtos.find(
        (item) => itemId === item.id
      );

      const novosItensCarrinho = [
        ...this.state.itensNoCarrinho,
        { ...itemAdicionado, quantidade: 1 },
      ];
      console.log(novosItensCarrinho);
      this.setState({ itensNoCarrinho: novosItensCarrinho })
      // localStorage.setItem("lista", JSON.stringify(novosItensCarrinho))
    }
  }

  removerItem = (itemID) => {
    const novosProdutos = this.state.itensNoCarrinho
      .map((item) => {
        if (item.id === itemID) {
          return {
            ...item,
            quantidade: item.quantidade - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantidade > 0);
    this.setState({ itensNoCarrinho: novosProdutos });
    localStorage.setItem("lista", JSON.stringify(novosProdutos))
  };

  valorTotal = () => {
    let valorTotal = 0;

    for (let produto of this.state.itensNoCarrinho) {
      valorTotal += produto.price * produto.quantidade;
    }
    return valorTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  render() {
    return (
      <ChakraProvider theme={theme}>
        <GridLayout>
          <HeaderBackground>
            <Header
              inputBuscaPorNome={this.state.inputBuscaPorNome}
              onChangeInputBuscaPorNome={this.onChangeInputBuscaPorNome}
              changePageHome={this.changePageHome}
              changePageCarrinho={this.changePageCarrinho}
              cartItens={this.state.itensNoCarrinho}
            />
          </HeaderBackground>

          <Main>

            {this.RenderPage()}

          </Main>

          <Footer>
            <p>Labeninja ® - 2022 - Todos os direitos reservados</p>
          </Footer>

        </GridLayout>
      </ChakraProvider>
    );
  }

}

export default App;
