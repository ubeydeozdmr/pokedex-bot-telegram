const { MESSAGE_HELP } = require('../../config');

module.exports = bot => {
  bot.help(ctx => {
    ctx.replyWithMarkdown(MESSAGE_HELP);
  });
};
