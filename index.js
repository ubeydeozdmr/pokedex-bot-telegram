require('dotenv').config();
const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

const startCommand = require('./src/commands/start');
startCommand(bot);

const helpCommand = require('./src/commands/help');
helpCommand(bot);

const pokemonCommand = require('./src/commands/pokemon');
pokemonCommand(bot);

const pokemonListCommand = require('./src/commands/pokemonList');
pokemonListCommand(bot);

bot.launch();

// exports.handler = (event, context, callback) => {
//   const tmp = JSON.parse(event.body); // get data passed to us
//   bot.handleUpdate(tmp); // make Telegraf process that data
//   return callback(null, {
//     // return something for webhook, so it doesn't try to send same stuff again
//     statusCode: 200,
//     body: '',
//   });
// };
