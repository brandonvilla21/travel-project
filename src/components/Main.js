import React from 'react';
import Card from './Card';

function Main(props) {
  const { history } = props;
  return (
    <section className="text-center margin-top-lg">
      <p className="margin-bottom-sm title-font text-shadow">
        Destinos preferidos
    </p>
      <p className="margin-bottom-md subtitle-font text-shadow">
        Mira nuestros destinos favoritos alrededor del mundo
    </p>
      <div className="top-country-container">
        <section className="top-country-gridarea">
          {
            props.paises.map(pais => {
              return (
                <Card
                  imagen={pais.imagen}
                  titulo={pais.titulo}
                  key={pais.id}
                  onClickCard={() => history.push(`/destinos/${pais.id}`)}
                />
              )
            })
          }
        </section>
      </div>
    </section>
  );
}

export default Main;
