const { MESSAGE_START } = require('../../config');

module.exports = bot => {
  bot.start(ctx => {
    console.log(
      'startCommand triggered by:',
      ctx.from.username,
      ctx.from.id,
      ctx.message.text
    );
    ctx.reply(MESSAGE_START);
  });
};
