import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Destino from './components/Destino';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import "./destinos.css";
import "./profile.css";
import { getData } from './api';

const query = `
  {
    allPlaces {
      id
      titulo
      imagen
    }
  }
`
/**
 *  Crear la ruta para Main
 *  Crear ruta para Destino
 *  Agregar evento onClick para navegar de un Card a la pagina de Destino pasandole un URL param
 *  En Destino - Obtener con una query la informacion del Pais seleccionado
 */
function App() {

  const [ destinos, setDestinos] = useState ([])

  async function llamarGraphQL() {
    // Llamar a la API de GraphQL
    const resultado = await getData('http://localhost:4000', { query });
    const resultadoJson = await resultado.json()
    // No es valido
    // destinos = resultadoJson.data.allPlaces
    setDestinos(resultadoJson.data.allPlaces)
  }

  useEffect(() => {
    llamarGraphQL()
    
  }, []);
  
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/destinos" render={(props) =>  <Main {...props} paises={destinos} />}/>
        <Route path="/destinos/:id" component={Destino}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;