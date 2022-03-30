const fetch = require('node-fetch');

const getPokemonTypeListModel = async () => {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/type`);
    let data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getPokemonTypeListModel;
