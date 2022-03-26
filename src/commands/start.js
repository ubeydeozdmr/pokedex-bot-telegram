const config = require('../config');

module.exports = bot => {
  bot.start(ctx => {
    ctx.reply(config.MESSAGE_START);
  });
};
