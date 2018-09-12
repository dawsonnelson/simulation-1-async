import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

export default class Shelves extends Component {

    render(){
        return(
            <div className = 'app'>
                <div>
                <Nav>{Nav}</Nav>
                </div> 
                <div className='shelf-container'>
             <div className = 'shelves'>
                    <Link to='/BinA'><div className = 'shelf'> Shelf A </div></Link>
                    <Link to='/BinB'><div className = 'shelf'> Shelf B </div></Link>
                    <Link to='BinC'><div className = 'shelf'> Shelf C </div></Link>
                    <Link to='BinD'><div className = 'shelf'> Shelf D </div></Link>
                </div>

            </div>
            </div>
        )
    }
}