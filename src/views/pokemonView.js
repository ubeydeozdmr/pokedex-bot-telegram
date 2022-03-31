const pokemonAbilityCallback = require('../controllers/callbacks/pokemonAbilityCallback');
// const pokemonTypeCallbackV2 = require('../controllers/callbacks/pokemonTypeCallback');
const pokemonTypeCallback = require('../controllers/callbacks/pokemonTypeCallback');
const emoji = require('../emoji');

/*
When Controller (pokemonCommand.js) connects with View (pokemonView.js), it
transfers data from Model (pokemonModel.js) to View. As a result, View (this
file) can send data such as pokémon's picture, name, ID, stats, abilities,
types, weight/length as a message to users in Telegram.
*/

const getPokemonView = (
  bot,
  ctx,
  _abilities,
  height,
  id,
  _name,
  _stats,
  _types,
  weight
) => {
  let types = '';
  let abilities = '';
  let stats = '';
  let name = _name.split('-');
  let tempArr = new Array();
  Object.values(name).forEach(item => {
    tempArr.push(item[0].toUpperCase() + item.slice(1));
  });
  name = tempArr.join().replaceAll(',', ' ');

  _types.forEach(item => {
    types += `${emoji.emojiTypes[item.type.name]} ${
      item.type.name[0].toUpperCase() +
      item.type.name.slice(1).replaceAll('-', ' ')
    } \`/pktype ${item.type.name}\`
`;
  });
  _abilities.forEach(item => {
    abilities += `${
      item.ability.name[0].toUpperCase() +
      item.ability.name.slice(1).replaceAll('-', ' ')
    } \`/pkability ${item.ability.name}\`
`;
  });
  _stats.forEach(item => {
    stats += `${emoji.emojiStats[item.stat.name] || ''} ${
      item.stat.name[0].toUpperCase() +
      item.stat.name.slice(1).replaceAll('-', ' ')
    }: ${item.base_stat}
`;
  });

  bot.telegram.sendPhoto(
    ctx.update.message.chat.id,
    `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${
      id < 10 ? '00' + id : id < 100 ? '0' + id : id
    }.png`,
    {
      parse_mode: 'markdown',
      caption: `*${name}* #${id} \`(${_name})\`
      
*Types:*
${types}
*Abilities:*
${abilities}
⚖️ Weight: ${weight / 10} kg
📏 Height: ${height / 10} m

*Stats:*
${stats}`,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Types',
              callback_data: `t-${id}`,
            },
            {
              text: 'Abilities',
              callback_data: `a-${id}`,
            },
          ],
        ],
      },
    }
  );

  bot.action(`t-${id}`, ctx => {
    // ctx.deleteMessage();
    pokemonTypeCallback(bot, ctx, _types);
    // console.log(ctx.update.callback_query.message.chat.id);
    // prettier-ignore
    // pokemonTypeCallbackV2(bot, ctx.update.callback_query.message.chat.id, _types);
  });

  bot.action(`a-${id}`, ctx => {
    // ctx.deleteMessage();
    pokemonAbilityCallback(ctx, _abilities);
  });
};

module.exports = getPokemonView;
