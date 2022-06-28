import React from 'react';
import CSS from './../../CSS/nodeshop.css';

export class Header extends React.Component {
    render() {
        return (
            <div className='Header'>
                <header className='cabecalho'>
                    <h1 className='logo'>
                        <a href="#index.html" title="Loja de Informática do Guimaraes">Loja Informática - Guimaraes</a>
                    </h1>

                    <form action="">
                        <input type="text" name="Pesquisa" id="Pesquisa" placeholder="Busque aqui !"/>

                            <button className='btn'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>

                    </form>
                </header>
            </div>
            
                );
    }
    
}