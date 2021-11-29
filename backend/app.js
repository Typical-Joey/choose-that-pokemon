const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/getPokemon", function(req, res){
  let pokemonId = 35;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  axios.get(url).then(response => {
    console.log(response);
    res.send(response);
  }).catch(error => {
    console.log(error);
    res.send(error);
  });
});


app.listen(process.env.PORT || 5000, function () {
    console.log("Server is now listening");
});