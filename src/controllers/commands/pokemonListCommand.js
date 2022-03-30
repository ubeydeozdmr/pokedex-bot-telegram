const { REJECT_INVALID_LIST_INPUT, NOT_FOUND_LIST } = require('../../config');
const getPokemonListModel = require('../../models/pokemonListModel');
const getPokemonListView = require('../../views/pokemonListView');

module.exports = bot => {
  bot.command('pklist', async ctx => {
    let input = ctx.message.text.toLowerCase().split(' ');
    if (input.length === 1) input.push('1');
    input.shift();
    if (isNaN(input[0]))
      return ctx.replyWithMarkdown(REJECT_INVALID_LIST_INPUT);
    if (input[0] < 1 || input[0] > 9) return ctx.reply(NOT_FOUND_LIST);
    let offset = (input[0] - 1) * 100;
    const pokemonListData = await getPokemonListModel(offset, 100);
    getPokemonListView(bot, ctx, pokemonListData, offset);
  });
};
