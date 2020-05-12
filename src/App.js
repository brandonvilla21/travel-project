import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import "./destinos.css";
import "./profile.css";

function App() {

  return (
    <BrowserRouter>
      <Nav />
        Agregar la ruta Main aqui
      <Footer />
    </BrowserRouter>
  );
}

export default App;