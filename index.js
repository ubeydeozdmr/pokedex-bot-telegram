'use strict';

require('dotenv').config();
const Telegraf = require('telegraf');
const axios = require('axios');
const bot = new Telegraf(process.env.BOT_TOKEN);
const welcome = `Hello, I'm Pokédex Bot. I can show you the list of all pokémon and give you the picture and description of that pokémon in return for you to enter the ID or name of the pokémon you requested. Try entering the /help command to get help.`;
const usage = `You can search Pokédex Bot by both ID and name. To do this, type /pk and leave a space, then enter the ID or name of the pokémon and send the command. The ID can be a minimum of 1 and a maximum of 898.

*Usage:*
/pk \`<id/name>\` - Photo and stats of any pokémon
/pk \`random\` - Photo and stats of random pokémon
/pklist \`<gen>\` - Shows the list of all pokémon from any generation.

*Examples:*
/pk 1 - Bulbasaur's photo and stats
/pk bulbasaur - Bulbasaur's photo and stats
/pk sandslash - Sandslash's photo and stats
/pk 139 - Omastar's photo and stats
/pklist 2 - Shows pokémon from the second generation.
/pklist 8 - Shows pokémon from the eighth generation.`;

const emojiTypes = {
  normal: '⚪',
  fighting: '👊',
  flying: '🕊️',
  poison: '🦠',
  ground: '🪵',
  rock: '🪨',
  bug: '🪲',
  ghost: '👻',
  steel: '🔩',
  fire: '🔥',
  water: '🌊',
  grass: '🍀',
  electric: '🌩️',
  psychic: '😈',
  ice: '🧊',
  dragon: '🐉',
  dark: '⚫',
  fairy: '🧚',
  unknown: '❓',
  shadow: '〰️',
};

const emojiStats = {
  hp: '❤️',
  attack: '⚔️',
  defense: '🛡️',
  speed: '👟',
};

bot.start(ctx => ctx.replyWithMarkdown(welcome));

bot.help(ctx => ctx.replyWithMarkdown(usage));

bot.command('pk', ctx => {
  let input = ctx.message.text.toLowerCase();
  let inputArray = input.split(' ');
  let pokemonId;
  let pokemonName;
  let pokemonTypes = '';
  let pokemonAbilities = '';
  let pokemonStats = '';

  const getAction = function () {
    try {
      axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId).then(res => {
        pokemonName =
          res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1);
        for (let i = 0; i < res.data.types.length; i++) {
          pokemonTypes +=
            emojiTypes[res.data.types[i].type.name] +
            ' ' +
            res.data.types[i].type.name.charAt(0).toUpperCase() +
            res.data.types[i].type.name.slice(1) +
            '\n';
        }
        for (let i = 0; i < res.data.abilities.length; i++) {
          pokemonAbilities +=
            res.data.abilities[i].ability.name.charAt(0).toUpperCase() +
            res.data.abilities[i].ability.name.slice(1).replace('-', ' ') +
            '\n';
        }
        for (let i = 0; i < res.data.stats.length; i++) {
          if (emojiStats[res.data.stats[i].stat.name] != undefined)
            pokemonStats += emojiStats[res.data.stats[i].stat.name] + ' ';

          pokemonStats +=
            res.data.stats[i].stat.name.charAt(0).toUpperCase() +
            res.data.stats[i].stat.name.slice(1).replace('-', ' ') +
            ': ' +
            res.data.stats[i].base_stat +
            '\n';
        }

        bot.telegram.sendPhoto(
          ctx.update.message.chat.id,
          `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${
            pokemonId < 10
              ? '00' + pokemonId
              : pokemonId < 100
              ? '0' + pokemonId
              : pokemonId
          }.png`,
          {
            parse_mode: 'markdown',
            caption:
              '*' +
              pokemonName +
              '* #' +
              pokemonId +
              '\n\n*Types:*\n' +
              pokemonTypes +
              '\n*Abilities:*\n' +
              pokemonAbilities +
              '\nWeight: ' +
              res.data.weight / 10 +
              ' kg' +
              '\nHeight: ' +
              res.data.height / 10 +
              ' m' +
              '\n\n*Stats:*\n' +
              pokemonStats,
          }
        );
      });
    } catch (e) {
      errorHandler('getAction()', e);
    }
  };

  const errorHandler = function (type, e) {
    console.log(type, e);
    bot.telegram.sendMessage(
      process.env.GROUP_ID,
      'ERROR: ' +
        type +
        '\n\n' +
        e +
        '\n\n' +
        ctx.from.username +
        ' said: ' +
        ctx.message.text
    );
  };

  try {
    if (inputArray.length == 1) {
      ctx.reply(usage.substring(150, 200));
    } else if (inputArray.length > 1) {
      inputArray.shift();
      inputArray.join(' ');
      let getNumber = Number(inputArray[0]);
      if (getNumber >= 1 && getNumber <= 898) {
        pokemonId = getNumber;
        getAction();
      } else if (inputArray[0] == 'random') {
        pokemonId = Math.trunc(Math.random() * 898) + 1;
        getAction();
      } else {
        try {
          axios
            .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=898')
            .then(res => {
              let found = false;
              for (let i = 0; i < res.data.results.length; i++) {
                if (inputArray[0] == res.data.results[i].name) {
                  found = true;
                  pokemonId = i + 1;
                  getAction();
                  break;
                }
              }
              if (!found)
                ctx.replyWithMarkdown(
                  '*There is no pokémon with this ID or name.* ' + usage
                );
            });
        } catch (e) {
          errorHandler('Check if pokemon name is valid', e);
        }
      }
    }
  } catch (e) {
    errorHandler('Detect inputArray.length', e);
  }
});

bot.command('pklist', ctx => {
  let input = ctx.message.text.toLowerCase();
  let inputArray = input.split(' ');
  let gen = Number(inputArray[1]);

  const getList = function (offset, limit) {
    let getListText = `List of pokemons

`;
    // ? Since the entire list cannot be displayed at once, an offset and a limit parameter are determined.
    axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=898')
      .then(res => {
        for (let i = offset; i < limit; i++) {
          getListText += `${i + 1}: ${res.data.results[i].name}
`;
        }
        ctx.reply(getListText);
      });
  };

  if (inputArray.length == 1) {
    ctx.reply(`I can't show all pokémon at once.
    
Usage: /pklist <generation (1-8)>

Examples:
/pklist 2
/pklist 8`);
  } else if (inputArray.length == 2) {
    // ? Offset and limit values are adjusted according to the generation of the pokémon.
    switch (gen) {
      case 1:
        getList(0, 151);
        break;
      case 2:
        getList(151, 251);
        break;
      case 3:
        getList(251, 386);
        break;
      case 4:
        getList(386, 493);
        break;
      case 5:
        getList(493, 649);
        break;
      case 6:
        getList(649, 721);
        break;
      case 7:
        getList(721, 809);
        break;
      case 8:
        getList(809, 898);
        break;
      default:
        ctx.reply('The generation which you entered must be between 1-8');
        break;
    }
  }
});

// bot.launch();

exports.handler = (event, context, callback) => {
  const tmp = JSON.parse(event.body); // get data passed to us
  bot.handleUpdate(tmp); // make Telegraf process that data
  return callback(null, {
    // return something for webhook, so it doesn't try to send same stuff again
    statusCode: 200,
    body: '',
  });
};
