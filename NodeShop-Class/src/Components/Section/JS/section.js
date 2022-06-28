import React from "react";
import CSS from './../../CSS/nodeshop.css';

export class Section extends React.Component{
    render() {
        return (
            <section className="news-letter">
        <h3>NewsLetter</h3>
        <p>Receba nossas promoções por e-mail.</p>
        <form>
            <input type="text" name="" id="" placeholder="Seu Nome"/>
            <input type="email" name="" id="" placeholder="Seu Email"/>
            <button>Cadastrar</button>
        </form>
    </section>
        );
    }
}