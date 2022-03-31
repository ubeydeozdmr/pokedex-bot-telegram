const getPokemonAbilityListModel = require('../../models/pokemonAbilityListModel');
const getPokemonAbilityModel = require('../../models/pokemonAbilityModel');
const getPokemonAbilityListView = require('../../views/pokemonAbilityListView');
const getPokemonAbilityView = require('../../views/pokemonAbilityView');

module.exports = bot => {
  bot.command('pkability', async ctx => {
    let input = ctx.message.text.toLowerCase().split(' ');
    if (input.length === 1) {
      const pokemonAbilityListModel = await getPokemonAbilityListModel();
      return getPokemonAbilityListView(ctx, pokemonAbilityListModel);
    }
    input.shift();
    const pokemonAbilityData = await getPokemonAbilityModel(ctx, input[0]);
    if (pokemonAbilityData)
      getPokemonAbilityView(ctx, input[0], pokemonAbilityData);
  });
};
