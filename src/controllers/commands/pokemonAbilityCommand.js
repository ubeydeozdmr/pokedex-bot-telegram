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
    const pokemonAbilityModel = await getPokemonAbilityModel(ctx, input[0]);
    if (pokemonAbilityModel)
      getPokemonAbilityView(ctx, input[0], pokemonAbilityModel);
  });
};
