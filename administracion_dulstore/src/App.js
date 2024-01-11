import React from 'react'
import './App.css';

import Menu from './Components/Menu';
import { FaBars } from "react-icons/fa";

const App = () => {
  return(
    <header className="main-header">
      <label for="btn-nav" className="btn-nav"><i className="fas fa-bars"><FaBars /></i></label>
      <input type='checkbox' id="btn-nav"></input>
      
      <nav>
        <ul className="navigation">
          <li><a href="#">Home</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    
  </header>
  )
}
export default App;
