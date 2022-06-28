import React from "react";
import logo from '../img/logo-header.png';

export function Footer() {
    return (

        <footer className="rodape center">

            <div className="footer-logo"><img src={logo} alt="" /></div>

            <div className="footer-list">
                <a href="#Contato">Contato</a>
                <a href="#Sobre">Sobre</a>
                <a href="#Lojas">Lojas</a>
                <a href="#Suporte">Suporte</a>
            </div>

            <div className="icons">
                <i class="icon-facebook fa-brands fa-facebook-f"></i>
                <i class="icon-instagram fa-brands fa-instagram-square"></i>
                <i class="icon-twitter fa-brands fa-twitter"></i>
                <i class="icon-email fa-solid fa-envelope"></i>
            </div>
        </footer>
    )
};