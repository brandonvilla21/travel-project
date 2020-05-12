import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import { getData } from './api';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import "./destinos.css";
import "./profile.css";
import Destino from './components/Destino';
const query = `
{
  allPlaces {
    id
    titulo
    imagen
  }
}
`

function App() {
  // Declara estado para arreglo de paises
  const [paises, setPaises] = useState([]);
  
  // Obteniendo datos de GraphQL
  useEffect(() => {
    async function llamarAPI() {
      const result = await getData('http://localhost:4000', {query})
      const { data } = await result.json()
      setPaises(data.allPlaces);
    }
    llamarAPI();
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/destinos/:id" component={Destino}/>
        <Route path="/destinos" render={(props) => <Main {...props} paises={paises} /> }/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;