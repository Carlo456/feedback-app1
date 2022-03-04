import React from 'react'
//rafce (react arrow functional componente export)
//forma con JSX

//se puede usar un fragment <> Contenido </> para omitir el partent component
const App = () => {
  //aqui van las variables y estados, en el return son llamados dentro de llaves{}, se puede jecutar cualquier JS aqui  

  const titulo = 'Pokedex';
  const mensaje = 'Esta es la pokedex nacional en reactjs';
  const lista = [
    { id: 1, nombre: 'Bulbasaur' },
    { id: 2, nombre: 'Ivysaur' },
    { id: 3, nombre: 'Venasaur' },
  ];


  const cargaPkm = false;
  if(cargaPkm){
    return (<h2>Cargando...</h2>)
  }

  const listaPkm = false;
  return (
    <div>
        <h1>{titulo}</h1>
        <p>{mensaje}</p>
        {
            listaPkm ? (
            <div>
                <h3>Pkm descubiertos: {lista.length}</h3>
                <ul>
                    {
                        lista.map((pokemon, index) => (
                            <li key={index}> {pokemon.nombre} </li>
                        ))
                    }
                </ul>
            </div>
            ) : (<h2>No hay Pokemon disponibles</h2>)
        }
        
    </div>
  )
}
//en el map puede ir en ves del index, lista.id porque es lo mismo, map agarra dos argumentos elemento unitario e indice a iterar
export default App
/*
//Forma antigua

function App(){
    return React.createElement('div', {className:'container'},
    React.createElement('h1', {} , 'My app')
}

export default App;

*/