import React from 'react';
import logo from '../img/logo-header.png';



export default function Header() {
    return (

        <div className="container">

            <header className=''>
                <div className='img-header'><img src={logo} alt="" /></div>

                <div className="itens">
                    <ul>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Produtos</li>
                        <li>Carrinho</li>
                    </ul>
                </div>
            </header>

        </div>
    );
}