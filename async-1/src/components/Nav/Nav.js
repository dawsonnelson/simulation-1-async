import React, { Component } from 'react'
import image from '../../images/logo.png'
import '../Nav/Nav.css'

export default class Nav extends Component {



    render() {
        return (
            <div>
            <div className="nav">
                <header>
                    <section>
                        <div className='nav-content'>
                        <img src={image} width="50" height="50" />
                        <a className='title' href = 'http://localhost:3000'>SHELFIE</a>
                        </div>
                        
                    </section>
                </header>
            </div>
            

            </div>
        )
    }
}