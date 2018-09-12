import React, { Component } from 'react'
import image from '../../images/logo.png'
import '../Nav/Nav-bin.css'

export default class Nav extends Component {

    render() {
        return (
            <div>
        <div className="nav">
            <div className="nav-logo">
                <div className="logo-box">
                     <img src={image} width="65" height="65" />
                </div>
            </div>
            <div className="nav-title">
                <div className="title-box">
                     <a className='title' href = 'http://localhost:3000'>Shelf A</a>
                </div>
            </div>
        </div>
                    

            
            

            </div>
        )
    }
}