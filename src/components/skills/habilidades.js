import React, { Component, Fragment } from 'react'
import './habilidades.css'

class Habilidades extends Component {
    state = {
        skill: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'PHP', 'C', 'Java', 'BootStrap', 'Gulp', 'Git']
    }

    render(){
        return <Fragment>
                <div id="flex">
                    {this.state.skill.map(
                        (item, index) => {
                            return <p className="skill" key={index}>{item}</p>
                        }
                )}
                </div>
                </Fragment>
    }
}

export default Habilidades