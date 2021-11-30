const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { response } = require("express");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/getPokemon", async function(req, res){
  let pokemonId = 35;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  
  await axios.get(url)
  .then(response => {
    // TypeError: Converting circular structure to JSON
    // console.log(response.data);
    const data = response.data;

    const pokemonData = {
      name: data.name,
      weight: data.weight,
    }
    res.send(pokemonData);

    })
  .catch(error => {
    console.log(error);
    return error;
  });
});


app.listen(process.env.PORT || 5000, function () {
    console.log("Server is now listening");
});