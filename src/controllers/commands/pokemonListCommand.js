// prettier-ignore
const { REJECT_LIST ,REJECT_INVALID_LIST_INPUT, NOT_FOUND_LIST } = require('../../config');
const getPokemonListModel = require('../../models/pokemonListModel');
const getPokemonListView = require('../../views/pokemonListView');

module.exports = bot => {
  bot.command('pklist', async ctx => {
    let input = ctx.message.text.toLowerCase().split(' ');
    if (input.length === 1) return ctx.reply(REJECT_LIST);
    input.shift();
    if (isNaN(input[0]))
      return ctx.replyWithMarkdown(REJECT_INVALID_LIST_INPUT);
    if (input[0] < 1 || input[0] > 9) return ctx.reply(NOT_FOUND_LIST);
    // prettier-ignore
    const pokemonListData = await getPokemonListModel((input[0] - 1) * 100, 100);
    getPokemonListView(ctx, pokemonListData, (input[0] - 1) * 100);
  });
};
