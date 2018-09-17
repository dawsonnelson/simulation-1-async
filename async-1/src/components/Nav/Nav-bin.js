import React, { Component } from 'react'
import image from '../../images/logo.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../Nav/Nav-bin.css'

export default class Nav_bin extends Component {
    
    render() {
        return (
            <div>
        <div className="nav">
            <div className="nav-logo">
                <div className="logo-box">
                < a href = 'http://localhost:3000'><img src={image} width="65" height="65" /></a>
                </div>
            </div>
            <div className="nav-title">
                <div className="title-box">
                     <a className='title'>Shelf {} </a>
                </div>
            </div>
        </div>

    
                    

            </div>
        )
    }
}