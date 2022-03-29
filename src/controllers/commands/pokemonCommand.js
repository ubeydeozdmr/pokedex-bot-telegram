const config = require('../../config');
const getPokemonModel = require('../../models/pokemonModel');
const getPokemonView = require('../../views/pokemonView');

module.exports = bot => {
  bot.command('pk', async ctx => {
    let input = ctx.message.text.toLowerCase().split(' ');
    if (input.length === 1) return ctx.reply(config.REJECT_INVALID_INPUT);
    input.shift();
    const pokemonData = await getPokemonModel(ctx, input[0]);
    if (pokemonData) getPokemonView(bot, ctx, ...pokemonData);
  });
};
