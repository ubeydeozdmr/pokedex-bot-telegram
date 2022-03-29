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

  _damageRelations.double_damage_from.forEach(
    item =>
      (doubleDamageFrom += `${Object.values(item)[0]}
`)
  );
  _damageRelations.double_damage_to.forEach(
    item =>
      (doubleDamageTo += `${Object.values(item)[0]}
`)
  );
  _damageRelations.half_damage_from.forEach(
    item =>
      (halfDamageFrom += `${Object.values(item)[0]}
`)
  );
  _damageRelations.half_damage_to.forEach(
    item =>
      (halfDamageTo += `${Object.values(item)[0]}
`)
  );
  _damageRelations.no_damage_from.forEach(
    item =>
      (noDamageFrom += `${Object.values(item)[0]}
`)
  );
  _damageRelations.no_damage_to.forEach(
    item =>
      (noDamageTo += `${Object.values(item)[0]}
`)
  );

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
