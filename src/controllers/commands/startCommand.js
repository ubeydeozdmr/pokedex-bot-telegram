const { MESSAGE_START } = require('../../config');

module.exports = bot => {
  bot.start(ctx => {
    ctx.reply(MESSAGE_START);
  });
};
