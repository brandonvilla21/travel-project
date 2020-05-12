import React from 'react'
import logo from "../assets/img/bedu_logo.png";
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
    <nav className="menu_main" >
      <img id="bedu-logo" src={logo} alt="bedu logo" />
      <div>
        <Link to="/destinos">Destinos</Link>
      </div>
    </nav>
  );
}

export default Nav;