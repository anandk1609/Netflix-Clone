import React from 'react';
import logo from "../assets/netflix-logo.png"
import "../styles/HeaderLogin.css";

export default function HeaderLogin() {
   return(
      <header className='header-container'>
         <img src={logo} alt="Netflix logo" height="53" width="180" className="logo"/>
      </header>
   )
}