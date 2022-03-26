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
