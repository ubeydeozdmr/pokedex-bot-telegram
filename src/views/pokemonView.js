const pokemonAbilityCallback = require('../controllers/callbacks/pokemonAbilityCallback');
const pokemonTypeCallback = require('../controllers/callbacks/pokemonTypeCallback');
const emoji = require('../emoji');

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
  let name = _name[0].toUpperCase() + _name.slice(1);

  _types.forEach(item => {
    types += `${emoji.emojiTypes[item.type.name]} ${
      item.type.name[0].toUpperCase() +
      item.type.name.slice(1).replaceAll('-', ' ')
    }
`;
  });
  _abilities.forEach(item => {
    abilities += `${
      item.ability.name[0].toUpperCase() +
      item.ability.name.slice(1).replaceAll('-', ' ')
    }
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
      caption: `*${name}* #${id}
      
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
    ctx.deleteMessage();
    pokemonTypeCallback(ctx, _types);
  });

  bot.action(`a-${id}`, ctx => {
    ctx.deleteMessage();
    pokemonAbilityCallback(ctx, _abilities);
  });
};

module.exports = getPokemonView;
