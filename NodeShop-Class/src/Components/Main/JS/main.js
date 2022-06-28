import React from "react";
import CSS from './../../CSS/nodeshop.css';
import loja from './../IMG/loja.jpg';

export class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <main className="principal">
                <article class="sobre">
            <h2>Sobre Nós</h2>
            <img src={loja}
                alt="Essa imagem retrata um vendedor rindo e ofertando um notebook para um casal. Vendedor estar vestido com camisa social .... e o outro homem esta vestido .... e a mulher esta vestida de ..."/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, labore error quis possimus, ab quam
                quaerat expedita suscipit quibusdam, vel neque voluptates sed dignissimos voluptatum reiciendis odit
                vero nemo nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorum magnam ipsam, impedit laborum unde
                nisi, fugit animi, earum doloremque illum voluptates voluptatem quam quae! Eos iure eligendi officiis
                esse.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro debitis voluptatibus quam, dolorum fuga
                aliquid sint dolore necessitatibus dicta tempore laborum natus dignissimos dolores ad? Temporibus ipsam
                voluptatum totam dolore?</p><br/>
            <p>Exercitationem quis aut magnam nostrum ut laboriosam consequatur ipsam fugiat! Nobis voluptatibus dolores
                facilis culpa, quis doloribus aspernatur dolorem exercitationem aperiam eos quae voluptatum enim placeat
                suscipit !!!.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo natus amet est odio, molestias recusandae
                sed? Illum iure nostrum deleniti impedit. Nobis eaque neque quod? Quod quidem illum dicta consequatur!
            </p>
        </article>
        <aside class="onde-estamos">
            <h2>Onde Estamos</h2>
            <p>Rua: Tito, n° Vila Romana - São Paulo - SP</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.124145260982!2d-46.69399738494411!3d-23.528036884699546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1647286152782!5m2!1spt-BR!2sbr" 
                 allowfullscreen="" loading="lazy"></iframe>
            <h2>Contatos</h2>
            <ul>
                <li id="whats"><i class="fa-brands fa-whatsapp-square"></i><a
                        href="https://contate.me/Thiago_Guimarae">(11) 9 3328-9077</a></li>
                <li id="email"><i class="fa-solid fa-envelope"></i><a href="#">Thiago.Santos.Guimarães@Outlook.com</a>
                </li>
                <li id="insta"><i class="fa-brands fa-instagram-square"></i><a href="#">Thiago_Guimarae</a></li>
            </ul>
        </aside>
                </main>
            </div>
                );
    }
};