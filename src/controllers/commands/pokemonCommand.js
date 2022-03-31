// prettier-ignore
const { REJECT_INVALID_INPUT, NOT_FOUND_PKNAME, NOT_FOUND_PKID } = require('../../config');
const getPokemonModel = require('../../models/pokemonModel');
const getPokemonView = require('../../views/pokemonView');

/*
As soon as the /pk command is entered, this function checks whether the text or
number to the right of the command entered is valid. If it is not valid it will
give an error message (see config.js). If valid, it pulls required data from
PokeAPI via pokemonModel.js and sends it to pokemonView.js.
*/

module.exports = bot => {
  bot.command('pk', async ctx => {
    let input = ctx.message.text.toLowerCase().split(' ');
    if (input.length === 1) return ctx.reply(REJECT_INVALID_INPUT);
    input.shift();
    if (input.length > 1) {
      let temp = input.join().replaceAll(',', '-');
      input = [];
      input.push(temp);
    }

    if (isFinite(input)) {
      if (input > 10000) {
        return ctx.reply(NOT_FOUND_PKID);
      }
    }

    const pokemonData = await getPokemonModel(ctx, input[0]);
    if (pokemonData && pokemonData[2] > 10000)
      return ctx.reply(NOT_FOUND_PKNAME);
    if (pokemonData) getPokemonView(bot, ctx, ...pokemonData);
  });
};
