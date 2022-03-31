const getPokemonTypeListView = (ctx, _data) => {
  let text = '*Try choosing one below:*\n\n';
  _data.forEach(item => {
    text += `${_data.indexOf(item) + 1}: ${
      item.name[0].toUpperCase() + item.name.slice(1)
    } \`/pktype ${item.name}\`
`;
  });
  ctx.replyWithMarkdown(text);
};

module.exports = getPokemonTypeListView;
