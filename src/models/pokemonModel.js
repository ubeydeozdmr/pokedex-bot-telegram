const fetch = require('node-fetch');
const { NOT_FOUND_PKID, NOT_FOUND_PKNAME } = require('../config');

/*
When pokemonCommand.js in the Controller task connects with this model, it pulls
the necessary data from the specified API route and returns it in its formatted
form. Controller (pokemonCommand.js) will take this returned data and send it to
View (pokemonView.js).
*/

const getPokemonModel = async (ctx, input) => {
  if (input === 'random') input = Math.trunc(Math.random() * 898) + 1;
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (res.status !== 200) {
      isFinite(input) ? ctx.reply(NOT_FOUND_PKID) : ctx.reply(NOT_FOUND_PKNAME);
      return;
    }
    let data = await res.json();
    return [
      data.abilities,
      data.height,
      data.id,
      data.name,
      data.stats,
      data.types,
      data.weight,
    ];
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getPokemonModel;
