import React, { Component } from 'react'
import './infos.css'

class Infos extends Component {
    state = {
        bio: "No ano de 2013, eu estava em meu último ano do ensino fundamental, onde tive meu primeiro contato com programação na aula de informática, à partir de então, tive em mente como uma possibilidade para o meu futuro. Em 2017-1, ingressei no curso de Análise e Desenvolvimento de Sistemas, e de fato me apaixonei pela programação. Atualmente estou desenvolvendo habilidades e pesquisando novas tecnologias e áreas para iniciar meu trabalho de conclusão de curso e também buscando estágios na área de computação.",
        profission: "Por me considerar uma pessoa curiosa, tenho mais um motivo para acreditar que estou na área correta, sempre busco cada vez mais conhecimento, a tecnologia faz parte da minha vida e entender como tudo funciona de fato, é fascinante!"
    }

    render(){
        return (
            <div className="container">
                <div className="item">
                    <span>
                        <img src="./assets/heart-icon.png" alt="icone biografia"/>
                        BIOGRAFIA
                    </span>
                    <article className="art">{this.state.bio}</article>
                </div>
                <div className="item">
                    <span>
                        <img src="./assets/profission-icon.png" alt="icone profissão"/>
                        PROFISSÃO
                    </span>
                    <article className="art">{this.state.profission}</article>
                </div>
                
            </div>
        );
    }
}

export default Infos