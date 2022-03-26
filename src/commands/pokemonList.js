const config = require('../config');
const getPokemonListData = require('../handlers/getPokemonListData');
const getPokemonListView = require('../views/getPokemonListView');

module.exports = bot => {
  bot.command('pklist', async ctx => {
    let input = ctx.message.text.toLowerCase().split(' ');
    if (input.length === 1) return ctx.reply(config.REJECT_LIST);
    input.shift();
    if (input[0] < 1 || input[0] > 9) return ctx.reply(config.NOT_FOUND_LIST);
    // prettier-ignore
    const pokemonListData = await getPokemonListData((input[0] - 1) * 100, 100);
    getPokemonListView(ctx, pokemonListData, (input[0] - 1) * 100);
  });
};
