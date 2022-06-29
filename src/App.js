import React from 'react'
import Header from './Components/Header/Header'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./theme"
import { GridLayout, Main, Footer, HeaderBackground } from './Components/GridLayout/GridLayout'
import BodyHome from './Components/BodyHomePage/BodyHome'

class App extends React.Component {

  render() {
    return (
      <ChakraProvider theme={theme}>
        <GridLayout>
          <HeaderBackground>
          <Header />
          </HeaderBackground>

          <Main>
          <BodyHome />
          </Main>

          <Footer>

          </Footer>

        </GridLayout>
      </ChakraProvider>
    );
  }

}

export default App;
