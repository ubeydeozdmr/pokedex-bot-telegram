const getPokemonListView = (ctx, data, offset) => {
  let i = offset;
  let list = 'List of pokemons\n\n';
  data.forEach(item => {
    i++;
    list += `${i}: ${
      item.name[0].toUpperCase() + item.name.slice(1).replaceAll('-', ' ')
    } \`/pk ${item.name}\`
`;
  });
  ctx.replyWithMarkdown(list);
};

module.exports = getPokemonListView;
