import React, { useState } from 'react';
import axios from 'axios';

export default function Pokemon() {
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
    <div>
      
    </div>
  )
}
