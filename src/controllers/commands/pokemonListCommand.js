const config = require('../../config');
const getPokemonListModel = require('../../models/pokemonListModel');
const getPokemonListView = require('../../views/pokemonListView');

module.exports = bot => {
  bot.command('pklist', async ctx => {
    let input = ctx.message.text.toLowerCase().split(' ');
    if (input.length === 1) return ctx.reply(config.REJECT_LIST);
    input.shift();
    if (input[0] < 1 || input[0] > 9) return ctx.reply(config.NOT_FOUND_LIST);
    // prettier-ignore
    const pokemonListData = await getPokemonListModel((input[0] - 1) * 100, 100);
    getPokemonListView(ctx, pokemonListData, (input[0] - 1) * 100);
  });
};
