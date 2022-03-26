const fetch = require('node-fetch');
const config = require('../config');

const getPokemonData = async (ctx, input) => {
  if (input === 'random') input = Math.trunc(Math.random() * 898) + 1;
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (res.status !== 200) {
      isFinite(input)
        ? ctx.reply(config.NOT_FOUND_PKID)
        : ctx.reply(config.NOT_FOUND_PKNAME);
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

module.exports = getPokemonData;
