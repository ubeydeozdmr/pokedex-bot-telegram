const getPokemonListView = (ctx, data, offset) => {
  let i = offset;
  let list = 'List of pokemons\n\n';
  data.forEach(item => {
    i++;
    list += i + ': ' + item.name + '\n';
  });
  ctx.reply(list);
};

module.exports = getPokemonListView;
