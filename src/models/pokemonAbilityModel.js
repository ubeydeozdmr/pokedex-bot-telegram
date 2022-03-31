const fetch = require('node-fetch');
const { NOT_FOUND_PKID, NOT_FOUND_PKNAME } = require('../config');

const getPokemonAbilityModel = async (ctx, ability) => {
  let res = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`);
  if (res.status !== 200) {
    isFinite(ability) ? ctx.reply(NOT_FOUND_PKID) : ctx.reply(NOT_FOUND_PKNAME);
    return;
  }
  let data = await res.json();
  return data.flavor_text_entries;
};

module.exports = getPokemonAbilityModel;
