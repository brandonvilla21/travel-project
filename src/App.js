import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import './index.css';
import "./destinos.css";
import "./profile.css";

function App() {
  // Declara estado para arreglo de paises
  const [paises, setPaises] = useState([]);
  
  // Obtiene los datos de la API
  useEffect(() => {
    async function llamarAPI() {
      const fetchResult = await fetch('https://bedu-travels-node.herokuapp.com/tours');
      const resultado = await fetchResult.json();
      setPaises(resultado.data);
    }
    llamarAPI();
  }, []);

  return (
    <>
      <Nav />
      <Main paises={paises} />
      <Footer />
    </>
  );
}

export default App;