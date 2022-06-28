import React from 'react'
import './header.css'

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
        return (
            <header>

                <div className='logo'>
                    <h4>LabeNinjas</h4>
                </div>


                <div className='lupa-carrinho'>
                        <input placeholder='Pesquisar'  />
                        <a href="#"><img src='./img/lupa-arredondada.png' /></a>
                        <a href='#'><img src ='./img/lar.png'/></a>
                        <a href='#'><img src ='./img/compra.png'/></a>
                    </div>
            </header>


        );
    }
}
