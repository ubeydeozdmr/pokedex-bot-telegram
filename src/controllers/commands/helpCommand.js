const { MESSAGE_HELP } = require('../../config');

module.exports = bot => {
  bot.help(ctx => {
    console.log(
      'helpCommand triggered by:',
      ctx.from.username,
      ctx.from.id,
      ctx.message.text
    );
    ctx.replyWithMarkdown(MESSAGE_HELP);
  });
};
