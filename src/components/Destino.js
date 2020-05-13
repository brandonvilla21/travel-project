import React, { useState, useEffect } from 'react';
import { getData } from '../api';
/**
 * Obtener el ID del pais seleccionado
 * Llamar al servidor de GraphQL para obtener la informacion
 * Guardar la informacion en un state
 * 
 * Mostrar las fotos en la pagina (map)
 */



function Destino(props) {
  const [ photos, setPhotos] = useState ([])
  async function GraphQL() {
    const id = props.match.params.id;
    const query = `
      {
        Place(id: ${id}) {
          id
          titulo
          imagen
          Photos{
            images
          }
        }
      }
    `
    const resultado = await getData('http://localhost:4000', { query })
    const resultadoJson = await resultado.json()
    setPhotos(resultadoJson.data.Place.Photos[0].images)
  }

  useEffect(() => {
    GraphQL()
  },[]);

  return (
    <section className="text-center margin-top-lg">
      <p className="margin-bottom-md subtitle-font text-shadow">
        Mira mas acerca del destino seleccionado
      </p>
      <div className="top-country-container">
        <section className="top-country-gridarea">
          {
            photos.map(photo => {
              return (
                <div>
                  <img src={photo} alt="Foto de destino" />
                </div>
              )
            })
          }
        </section>
      </div>
    </section>
  )
}

export default Destino;
