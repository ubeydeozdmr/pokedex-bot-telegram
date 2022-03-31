const fetch = require('node-fetch');

const getPokemonAbilityListModel = async () => {
  try {
    let res = await fetch(
      `https://pokeapi.co/api/v2/ability?offset=0&limit=100`
    );
    let data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getPokemonAbilityListModel;
