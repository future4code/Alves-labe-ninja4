import React from 'react'
import Header from './Components/Header/Header'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./theme"
import { GridLayout, Main, Footer, HeaderBackground } from './Components/GridLayout/GridLayout'
import BodyHome from './Components/BodyHomePage/BodyHome'
import ShoppingCartPage from './Components/ShoppingCartPage/ShoppingCartPage'

class App extends React.Component {
  state = {
    cart: [],
    totalValue: 0,
  }

  removeCartItem = (itemToRemove) => {
    console.log(itemToRemove)
  }


  render() {
    return (
      <ChakraProvider theme={theme}>
        <GridLayout>
          <HeaderBackground>
          <Header />
          </HeaderBackground>

          <Main>
          <BodyHome />
          <ShoppingCartItem 
            totalValue={this.state.totalValue}  
            cartItens={this.state.cart}
            onClick={this.removeCartItem}
          />
          </Main>

          <Footer>

          </Footer>

        </GridLayout>
      </ChakraProvider>
    );
  }

}

export default App;
