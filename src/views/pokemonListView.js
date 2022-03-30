const getPokemonListView = (bot, ctx, data, offset) => {
  let paginationBtnsArr = new Array();
  let curPage = offset / 100 + 1;
  let i = offset;
  let list = 'List of pokemons\n\n';

  data.forEach(item => {
    i++;
    list += `${i}: ${
      item.name[0].toUpperCase() + item.name.slice(1).replaceAll('-', ' ')
    } \`/pk ${item.name}\`
`;
  });

  switch (curPage) {
    case 1:
      paginationBtnsArr.push({
        text: `Page ${curPage + 1} >`,
        callback_data: `page-${curPage + 1}`,
      });
      break;
    case 9:
      paginationBtnsArr.push({
        text: `< Page ${curPage - 1}`,
        callback_data: `page-${curPage - 1}`,
      });
      break;
    default:
      paginationBtnsArr.push({
        text: `< Page ${curPage - 1}`,
        callback_data: `page-${curPage - 1}`,
      });
      paginationBtnsArr.push({
        text: `● ${curPage} ●`,
        callback_data: `page-${curPage}`,
      });
      paginationBtnsArr.push({
        text: `Page ${curPage + 1} >`,
        callback_data: `page-${curPage + 1}`,
      });
  }

  bot.telegram.sendMessage(
    ctx.update.callback_query?.message.chat.id || ctx.update.message.chat.id,
    list,
    {
      parse_mode: 'MarkdownV2',
      reply_markup: {
        inline_keyboard: [
          paginationBtnsArr,
          // [
          //   {
          //     text: `< Page ${curPage - 1}`,
          //     callback_data: `page-${curPage - 1}`,
          //   },
          //   {
          //     text: `● ${curPage} ●`,
          //     callback_data: `page-${curPage}`,
          //   },
          //   {
          //     text: `Page ${curPage + 1} >`,
          //     callback_data: `page-${curPage + 1}`,
          //   },
          // ],
        ],
      },
    }
  );

  bot.action(`page-${curPage - 1}`, ctx => {
    ctx.deleteMessage();
    ctx.replyWithMarkdown(`\`/pklist ${curPage - 1}\``);
  });

  bot.action(`page-${curPage}`, ctx => {
    ctx.deleteMessage();
    ctx.replyWithMarkdown(`\`/pklist ${curPage}\``);
  });

  bot.action(`page-${curPage + 1}`, ctx => {
    ctx.deleteMessage();
    ctx.replyWithMarkdown(`\`/pklist ${curPage + 1}\``);
  });
  // ctx.replyWithMarkdown(list);
};

module.exports = getPokemonListView;
