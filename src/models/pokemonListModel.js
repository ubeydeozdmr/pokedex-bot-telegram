const fetch = require('node-fetch');

const getPokemonListModel = async (offset, limit = 100) => {
  if (offset === 800) limit -= 2;
  try {
    let res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    let data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getPokemonListModel;
