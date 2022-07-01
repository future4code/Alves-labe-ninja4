import React from 'react'
import { HeaderCss, DivLogo, Logo, DivLupaCarrinho, DivBusca } from './Styled';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {

        <a onClick={this.props.changePageCarrinho}  href='#'><img src='./img/compra.png' /></a>

        return (
            <HeaderCss>

            <DivLogo onClick={this.props.changePageHome}>
                <Logo>LabeNinjas</Logo>
            </DivLogo>


            
                <DivBusca>
                <input value={this.props.inputBuscaPorNome} onChange={this.props.onChangeInputBuscaPorNome} placeholder='Pesquisar' />
                <a href="#"><img src='./img/lupa-arredondada.png' alt='lupa' /></a>
                </DivBusca>
                <DivLupaCarrinho>
                <a onClick={this.props.changePageHome} href='#'><img src='./img/lar.png' alt='home page' /></a>
                <a onClick={this.props.changePageCarrinho}  href='#'><img src='./img/compra.png' /></a>
            </DivLupaCarrinho>
        </HeaderCss>


        );
    }
}
