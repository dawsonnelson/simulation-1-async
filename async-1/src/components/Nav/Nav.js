import React, { Component } from 'react'
import image from '../../images/logo.png'
import '../Nav/Nav.css'

export default class Nav extends Component {



    render() {
        return (
            <div>
            <div className="nav">
                <header>
                    
                        <div className='nav-content'>
                        <img src={image} width="65" height="65" />
                        <a className='title' href = 'http://localhost:3000'>SHELFIE</a>
                        </div>
                        
                    
                </header>
            </div>
            

            </div>
        )
    }
}