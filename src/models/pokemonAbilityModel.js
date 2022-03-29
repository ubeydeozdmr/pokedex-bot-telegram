const fetch = require('node-fetch');

const getPokemonAbilityModel = async ability => {
  let res = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`);
  let data = await res.json();
  return data.flavor_text_entries;
};

module.exports = getPokemonAbilityModel;
