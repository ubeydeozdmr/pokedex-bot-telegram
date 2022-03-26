const emoji = require('../emoji');

const getPokemonView = (
  bot,
  ctx,
  _abilities,
  _height,
  _id,
  _name,
  _stats,
  _types,
  _weight
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
      _id < 10 ? '00' + _id : _id < 100 ? '0' + _id : _id
    }.png`,
    {
      parse_mode: 'markdown',
      caption: `*${name}* #${_id}
      
*Types:*
${types}
*Abilities:*
${abilities}
Weight: ${_weight / 10} kg
Height: ${_height / 10} m

*Stats:*
${stats}`,
    }
  );
};

module.exports = getPokemonView;
