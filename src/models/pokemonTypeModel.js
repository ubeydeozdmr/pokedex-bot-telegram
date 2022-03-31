const fetch = require('node-fetch');

const getPokemonTypeModel = async type => {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    if (res.status !== 200) {
      return;
    }
    let data = await res.json();
    return [data.name, data.damage_relations, data.pokemon];
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getPokemonTypeModel;
