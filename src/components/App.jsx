import { useState } from "react";
import axios from "axios";
import SideBar from "./SideBar";
import MainScreen from "./MainScreen";

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
      <SideBar />
      <MainScreen />
    </>
  );
}

export default App;
