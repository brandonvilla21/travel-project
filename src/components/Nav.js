import React from 'react'
import logo from "../assets/img/bedu_logo.png";

const Nav = props => {
  return (
    <nav className="menu_main" >
      <img id="bedu-logo" src={logo} alt="bedu logo" />
      <div>
        {/* TODO agregar Links aqui */}
      </div>
    </nav>
  );
}

export default Nav;