import { useState } from "react";
import axios from "axios";


function App() {

  const [pokemon, setPokemon] = useState('');

  function getPokemon(){
    const url = '/getPokemon'; // Backend endpoint
    axios.get(url)
    .then(response => {
      const data = JSON.stringify(response.data);
      setPokemon(data);
    })
    .catch(error => {
      setPokemon(error);
    });
  }

  return (
    <>
      <h1>Hello World</h1> 
      {pokemon}
      <button onClick={getPokemon}>Click me</button>
    </>
  );
}

export default App;
