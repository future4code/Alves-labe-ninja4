import React from 'react'
import Header from './Components/Header/Header'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./theme"
import { GridLayout, Main, Footer, HeaderBackground } from './Components/GridLayout/GridLayout'
import BodyHome from './Components/BodyHomePage/BodyHomePage'
import Cadastro from './Components/Cadastro/Cadastro'
import CardProdutos from './Components/CardProdutos/CardProdutos'
import TelaProdutos from './Components/TelaProdutos/TelaProdutos'
import ShoppingCartItem from './Components/ShoppingCartPage/ShoppingCartItem/ShoppingCartItem'

class App extends React.Component {
  state = {
    pagina: "home",
    cart: [],
    totalValue: 0,
    inputBuscaPorNome: "",
  }

removeCartItem = (itemToRemove) => {
    console.log(itemToRemove)
  }

  RenderPage = () => {
    if (this.state.pagina === "cadastro") {
      return <Main>
        <Cadastro />
                </Main>
    } else if (this.state.pagina === "home") {
      return <Main>
        <BodyHome
          changePageCadastro={this.changePageCadastro}
          changePageContratar={this.changePageContratar} />
      </Main>
    } else if (this.state.pagina === "contratar") {
      return <TelaProdutos
      inputBuscaPorNome={this.state.inputBuscaPorNome}
        onChangeInputBuscaPorNome={this.onChangeInputBuscaPorNome}>
        <ShoppingCartItem 
            totalValue={this.state.totalValue}  
            cartItens={this.state.cart}
            onClick={this.removeCartItem}    
            // Codigo da Ane ta aqui
          />
        <CardProdutos /> 
        </TelaProdutos>
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

  onChangeInputBuscaPorNome = (event) => {
    this.setState({ inputBuscaPorNome: event.target.value });
};

  render() {
    return (
      <ChakraProvider theme={theme}>
        <GridLayout>
          <HeaderBackground>
            <Header
              changePageHome={this.changePageHome}
              inputBuscaPorNome={this.state.inputBuscaPorNome}
        onChangeInputBuscaPorNome={this.onChangeInputBuscaPorNome}
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
