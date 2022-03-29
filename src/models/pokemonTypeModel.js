const fetch = require('node-fetch');

const getPokemonTypeModel = async type => {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    let data = await res.json();
    return [data.name, data.damage_relations, data.pokemon];
  } catch (err) {
    console.log(err);
  }
};

module.exports = getPokemonTypeModel;
