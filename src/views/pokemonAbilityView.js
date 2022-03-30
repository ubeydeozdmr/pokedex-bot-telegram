const getPokemonAbilityView = (ctx, _abilityName, _entries) => {
  let text = '';

  let abilityName = _abilityName[0].toUpperCase() + _abilityName.slice(1);
  text += `*${abilityName.replaceAll('-', ' ')}*

`;
  // console.log(_entries);
  Object.values(_entries).forEach(item => {
    if (item.language.name === 'en')
      text += `*${
        item.version_group.name[0].toUpperCase() +
        item.version_group.name.slice(1).replaceAll('-', ' ')
      }:* ${item.flavor_text}
`;
    // console.log(item.flavor_text, item.version_group.name);
  });

  ctx.replyWithMarkdown(text);
};

module.exports = getPokemonAbilityView;