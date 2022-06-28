import React from 'react';
import '../../App.css';
import logo from '../img/logo-header.png';

export function Header() {
    return (
        <div className='header'>
            <header className='cabecalho'>
                <h1 className="header-title">Graja Imports</h1>
                <img className='logo' src={logo} alt="" />

                <ul className='header-list'>
                    <a href="#home">Home</a>
                    <a href="#Roupas Mas">Roupas Mas</a>
                    <a href="#Roupas Fem">Roupas Fem</a>
                    <a href="#Sobre">Sobre</a>
                    <a href="#Roupas Infantis">Roupas Infantis</a>
                </ul>

                <i className="icon-1 fa-solid fa-arrow-right-to-bracket"></i>
            </header>
        </div>
    );
}