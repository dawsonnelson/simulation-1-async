import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav-bin'

export default class BinA extends Component {

    render(){
        return(
            <div className='app'>
            <div>
                <Nav>{Nav}</Nav>
            </div>
            <div className = 'bin-container'>
            <div className = 'bins'>
            
                </div>
            </div>
            </div>
        )
    }
}