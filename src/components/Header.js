import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
               <h1 ><div style={{borderBottom :'2px solid white',display: 'inline-block'}}>Todo App</div></h1>
               <div>
               <span><Link to="/" className="link">Home</Link></span>
               <span><Link to='/about'  className="link">About</Link></span>
               </div>
            </div>
        )
    }
}
const headerStyle = {
    color: "white",
    backgroundColor: "#333",
    padding:'10px',
    textAlign: 'center'

}