const getPokemonAbilityListModel = require('../../models/pokemonAbilityListModel');
const getPokemonAbilityModel = require('../../models/pokemonAbilityModel');
const getPokemonAbilityListView = require('../../views/pokemonAbilityListView');
const getPokemonAbilityView = require('../../views/pokemonAbilityView');

module.exports = bot => {
  bot.command('pkability', async ctx => {
    let input = ctx.message.text.toLowerCase().split(' ');
    if (input.length === 1) {
      const pokemonAbilityListModel = await getPokemonAbilityListModel(0);
      return getPokemonAbilityListView(ctx, pokemonAbilityListModel);
    }
    input.shift();
    if (isFinite(input[0])) {
      if (input[0] >= 1 && input[0] <= 4) {
        const pokemonAbilityListModel = await getPokemonAbilityListModel(
          (input[0] - 1) * 100
        );
        return getPokemonAbilityListView(ctx, pokemonAbilityListModel);
      } else return ctx.reply('Please enter a number between 1-4');
    }
    const pokemonAbilityData = await getPokemonAbilityModel(ctx, input[0]);
    if (pokemonAbilityData)
      getPokemonAbilityView(ctx, input[0], pokemonAbilityData);
  });
};
