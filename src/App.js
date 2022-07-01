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
import ShoppingCartPage from './Components/ShoppingCartPage/ShoppingCartPage'

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
         return <TelaProdutos changePageCarrinho ={this.changePageCarrinho}
         inputBuscaPorNome={this.state.inputBuscaPorNome}
        onChangeInputBuscaPorNome={this.onChangeInputBuscaPorNome} > 
         <CardProdutos /> 
         </TelaProdutos >
        case "carrinho":
         return <ShoppingCartPage />
        default:
         return <div>Error! Page not found.</div>
    }}

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
