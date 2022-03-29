const { emojiTypes } = require('../emoji');

const getPokemonTypeView = (ctx, _typeName, _damageRelations, _pokemonList) => {
  let name = _typeName[0].toUpperCase() + _typeName.slice(1);
  let doubleDamageFrom = '';
  let doubleDamageTo = '';
  let halfDamageFrom = '';
  let halfDamageTo = '';
  let noDamageFrom = '';
  let noDamageTo = '';
  let pokemon = '';

  _damageRelations.double_damage_from.forEach(item => {
    Object.entries(emojiTypes).forEach(emoji => {
      if (item.name === emoji[0]) doubleDamageFrom += `${emoji[1]} `;
    });
    doubleDamageFrom += `${
      Object.values(item)[0][0].toUpperCase() + Object.values(item)[0].slice(1)
    }
`;
  });
  _damageRelations.double_damage_to.forEach(item => {
    Object.entries(emojiTypes).forEach(emoji => {
      if (item.name === emoji[0]) doubleDamageTo += `${emoji[1]} `;
    });
    doubleDamageTo += `${
      Object.values(item)[0][0].toUpperCase() + Object.values(item)[0].slice(1)
    }
`;
  });
  _damageRelations.half_damage_from.forEach(item => {
    Object.entries(emojiTypes).forEach(emoji => {
      if (item.name === emoji[0]) halfDamageFrom += `${emoji[1]} `;
    });
    halfDamageFrom += `${
      Object.values(item)[0][0].toUpperCase() + Object.values(item)[0].slice(1)
    }
`;
  });
  _damageRelations.half_damage_to.forEach(item => {
    Object.entries(emojiTypes).forEach(emoji => {
      if (item.name === emoji[0]) halfDamageTo += `${emoji[1]} `;
    });
    halfDamageTo += `${
      Object.values(item)[0][0].toUpperCase() + Object.values(item)[0].slice(1)
    }
`;
  });
  _damageRelations.no_damage_from.forEach(item => {
    Object.entries(emojiTypes).forEach(emoji => {
      if (item.name === emoji[0]) noDamageFrom += `${emoji[1]} `;
    });
    noDamageFrom += `${
      Object.values(item)[0][0].toUpperCase() + Object.values(item)[0].slice(1)
    }
`;
  });
  _damageRelations.no_damage_to.forEach(item => {
    Object.entries(emojiTypes).forEach(emoji => {
      if (item.name === emoji[0]) noDamageTo += `${emoji[1]} `;
    });
    noDamageTo += `${
      Object.values(item)[0][0].toUpperCase() + Object.values(item)[0].slice(1)
    }
`;
  });

  _pokemonList.forEach(
    item =>
      (pokemon += `${item.pokemon.name}
`)
  );

  let emoji = '';
  Object.entries(emojiTypes).forEach(item => {
    if (_typeName === item[0]) emoji = item[1];
  });
  // console.log(...Object.entries(emojiTypes));

  ctx.replyWithMarkdown(
    `
${emoji} *${name}*

*Double damage from:*
${doubleDamageFrom || '-\n'}
*Double damage to:*
${doubleDamageTo || '-\n'}
*Half damage from:*
${halfDamageFrom || '-\n'}
*Half damage to:*
${halfDamageTo || '-\n'}
*No damage from:*
${noDamageFrom || '-\n'}
*No damage to:*
${noDamageTo || '-\n'}
*Pokemon List:*
${pokemon}
`
  );
};

module.exports = getPokemonTypeView;
