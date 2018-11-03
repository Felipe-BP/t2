import React, { Component, Fragment } from 'react';
import './App.css'
import NavBar from './components/nav/navbar'
import Title from './components/title/title'
import Perfil from './components/perfil/perfil-component'
import Button from './components/button/Button'
import Skills from './components/skills/habilidades'
import Habilidades from './components/skills/habilidades';
import Blog from './components/blog/blog'

class App extends Component {
  render() {
    return (<Fragment>
              <NavBar color="false"/>
              <section className="perfil" id="perfil">
                <div className="title">
                  <Title value="Perfil" color="false" />
                </div>
                <Perfil />
                <div className="title">
                  <Button value="Download Currículo" content="./assets/Currículo.pdf" color="false"/>
                </div>
              </section>
              <section id="habilidades">
                  <div >
                    <Title value="Habilidades" color="true" />
                  </div>
                  <div>
                    <p id="p">Estas são as minhas habilidades!</p>
                    <Habilidades />
                  </div>
              </section>
              <section id="blog">
                <div className="title">
                  <Title value="Blog" color="false" />
                </div>
                <Blog />
              </section>
              <section id="trabalhos">

              </section>
              <section id="infos">

              </section>
              <section id="contato">

              </section>
            </Fragment>
            );
  }
}

export default App;