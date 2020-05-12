import React, { useEffect, useState } from 'react';
import { getData } from '../api';

function Destino(props) {
  const { match } = props;
  const [fotos, setFotos] = useState();

  async function llamarAPI() {
    const id = match.params.id;
    const query = `
      {
        Place(id: ${id}) {
          id
          titulo
          imagen
          Photos {
            images
          }
        }
      }
    `
    const result = await getData('http://localhost:4000', { query })
    const { data } = await result.json()
    setFotos(data.Place.Photos[0].images);
  }

  useEffect(() => {
    llamarAPI();
  }, [match.params.id]);

  return (
    <section className="text-center margin-top-lg">
      <p className="margin-bottom-md subtitle-font text-shadow">
        Mira mas acerca del destino seleccionado
      </p>
      <div className="top-country-container">
        <section className="top-country-gridarea">
          {
            fotos &&
            fotos.map(image => {
              return (
                <div>
                  <img src={image} alt="Imagen destino" />
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
