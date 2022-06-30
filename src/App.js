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

class App extends React.Component {
  state = {
    pagina: "home",
    cart: [],
    totalValue: 0,
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
         return <TelaProdutos changePageCarrinho ={this.changePageCarrinho} >
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

  

  render() {
    return (
      <ChakraProvider theme={theme}>
        <GridLayout>
          <HeaderBackground>
            <Header
              changePageHome={this.changePageHome}
              changePageCarrinho={this.changePageCarrinho}
            />
          </HeaderBackground>

          <Main>
          
            {this.RenderPage()}

          </Main>

          <Footer>

          </Footer>

        </GridLayout>
      </ChakraProvider>
    );
  }

}

export default App;
