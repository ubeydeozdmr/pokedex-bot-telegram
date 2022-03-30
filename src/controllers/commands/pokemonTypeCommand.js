const getPokemonTypeListModel = require('../../models/pokemonTypeListModel');
const getPokemonTypeModel = require('../../models/pokemonTypeModel');
const getPokemonTypeListView = require('../../views/pokemonTypeListView');
const getPokemonTypeView = require('../../views/pokemonTypeView');

module.exports = bot => {
  bot.command('pktype', async ctx => {
    let input = ctx.message.text.toLowerCase().split(' ');
    if (input.length === 1) {
      const pokemonTypeListData = await getPokemonTypeListModel();
      return getPokemonTypeListView(ctx, pokemonTypeListData);
    }
    input.shift();
    const pokemonTypeData = await getPokemonTypeModel(input[0]);
    if (pokemonTypeData) getPokemonTypeView(bot, ctx, ...pokemonTypeData);
  });
};
