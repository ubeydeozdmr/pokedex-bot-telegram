const pokemonAbilityListView = (ctx, _data) => {
  let text = '*Try choosing one below:*\n\n';
  _data.forEach(
    item =>
      (text += `${
        item.name[0].toUpperCase() + item.name.slice(1)
      } \`/pkability ${item.name}\`
`)
  );
  ctx.replyWithMarkdown(text);
};

module.exports = pokemonAbilityListView;
