const fetch = require('node-fetch');

const getPokemonAbilityListModel = async offset => {
  try {
    let res = await fetch(
      `https://pokeapi.co/api/v2/ability?offset=${offset}&limit=100`
    );
    let data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getPokemonAbilityListModel;
