const config = require('../config');

module.exports = bot => {
  bot.help(ctx => {
    ctx.replyWithMarkdown(config.MESSAGE_HELP);
  });
};
