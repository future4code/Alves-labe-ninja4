import React from 'react'
import Header from './Components/Header/Header'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./theme"
import { GridLayout, Main, Footer, HeaderBackground } from './Components/GridLayout/GridLayout'
import BodyHome from './Components/BodyHomePage/BodyHomePage'
import Cadastro from './Components/Cadastro/Cadastro'
import CardProdutos from './Components/CardProdutos/CardProdutos'
import TelaProdutos from './Components/TelaProdutos/TelaProdutos'

class App extends React.Component {
  state = {
    pagina: "home"
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
      return <TelaProdutos>
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

  render() {
    return (
      <ChakraProvider theme={theme}>
        <GridLayout>
          <HeaderBackground>
            <Header
              changePageHome={this.changePageHome}
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
