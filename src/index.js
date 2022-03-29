require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

const startCommand = require('./controllers/commands/startCommand');
startCommand(bot);

const helpCommand = require('./controllers/commands/helpCommand');
helpCommand(bot);

const pokemonCommand = require('./controllers/commands/pokemonCommand');
pokemonCommand(bot);

const pokemonListCommand = require('./controllers/commands/pokemonListCommand');
pokemonListCommand(bot);

bot.launch();
