'use strict';

require('dotenv').config();
const Telegraf = require('telegraf');
const axios = require('axios');
const bot = new Telegraf(process.env.BOT_TOKEN);
const welcome = `Hello, I'm Pokédex Bot. I can show you the list of all pokémon and give you the picture and description of that pokémon in return for you to enter the ID or name of the pokémon you requested. Try entering the /help command to get help.`;
const usage = `You can search Pokédex Bot by both ID and name. To do this, type /pk and leave a space, then enter the ID or name of the pokémon and send the command. The ID can be a minimum of 1 and a maximum of 898.

*Usage:*
/pk \`<id/name>\` - Photo and stats of any pokémon
/pk \`<id/name> desc\` - Photo, stats and description of any pokémon
/pklist \`<gen>\` - Shows the list of all pokémon from any generation.

*Examples:*
/pk 1 - Bulbasaur's photo and stats
/pk bulbasaur - Bulbasaur's photo and stats
/pk sandslash desc - Sandslash's photo, stats and description
/pk 139 desc - Omastar's photo, stats and descriptions
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

const getPictureId = function (num) {
  // ? Converts the incoming number via the "num" parameter to a 3-character string.
  if (num < 10) num = '00' + num;
  else if (num < 100) num = '0' + num;
  return num;
};

bot.start(ctx => ctx.replyWithMarkdown(welcome));

bot.help(ctx => ctx.replyWithMarkdown(usage));

bot.command('pk', ctx => {
  let input = ctx.message.text.toLowerCase();
  let inputArray = input.split(' ');
  let getNumber = Number(inputArray[1]);
  let pokemonName;
  let pokemonId;
  let pokemonDesc = '';
  let pokemonTypes = '';
  let pokemonAbilities = '';
  let pokemonStats = '';

  const getPicture = function (ctx, picId) {
    try {
      ctx.replyWithPhoto(
        `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPictureId(
          picId
        )}.png`
      );
    } catch (e) {
      console.log('getPicture()', e);
      bot.telegram.sendMessage(
        process.env.GROUP_ID,
        'ERROR: getPicture()\n\n' +
          e +
          '\n\n' +
          ctx.from.username +
          ' said: ' +
          ctx.message.text
      );
    }
  };
  
  // ! BUG: When node.js is run from the console (when in testing), the bot works fine,
  // ! but when deployed using the AWS Lambda function, the getDescription() function does not work.

  const getDescription = function (ctx, descId) {
    try {
      axios
        .get('https://pokeapi.co/api/v2/pokemon-species/' + descId)
        .then(res => {
          for (let i = 0; i < res.data.flavor_text_entries.length; i++) {
            if (res.data.flavor_text_entries[i].language.name == 'en')
              pokemonDesc +=
                res.data.flavor_text_entries[i].version.name
                  .charAt(0)
                  .toUpperCase() +
                res.data.flavor_text_entries[i].version.name
                  .slice(1)
                  .replaceAll('-', ' ') +
                ':\n' +
                res.data.flavor_text_entries[i].flavor_text +
                '\n\n';
          }
          ctx.reply(pokemonDesc);
        });
    } catch (e) {
      console.log('getDescription()', e);
      bot.telegram.sendMessage(
        process.env.GROUP_ID,
        'ERROR: getDescription()\n\n' +
          e +
          '\n\n' +
          ctx.from.username +
          ' said: ' +
          ctx.message.text
      );
    }
  };

  const getTypes = function (ctx, pkId) {
    try {
      axios.get('https://pokeapi.co/api/v2/pokemon/' + pkId).then(res => {
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
          pokemonStats +=
            emojiStats[res.data.stats[i].stat.name] == undefined
              ? res.data.stats[i].stat.name.charAt(0).toUpperCase() +
                res.data.stats[i].stat.name.slice(1).replace('-', ' ') +
                ': ' +
                res.data.stats[i].base_stat +
                '\n'
              : emojiStats[res.data.stats[i].stat.name] +
                ' ' +
                res.data.stats[i].stat.name.charAt(0).toUpperCase() +
                res.data.stats[i].stat.name.slice(1).replace('-', ' ') +
                ': ' +
                res.data.stats[i].base_stat +
                '\n';
        }
        ctx.replyWithMarkdown(
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
            pokemonStats
        );
      });
    } catch (e) {
      console.log('GetTypes()', e);
      bot.telegram.sendMessage(
        process.env.GROUP_ID,
        'ERROR: getTypes()\n\n' +
          e +
          '\n\n' +
          ctx.from.username +
          ' said: ' +
          ctx.message.text
      );
    }
  };

  if (inputArray.length == 1) {
    // ? This block of code is returned if only the /pk command is entered.
    ctx.reply(usage.substring(150, 200));
  } else if (getNumber >= 1 && getNumber <= 898) {
    // ? This code block is returned if a number between 0-898 is entered.
    inputArray.shift();
    inputArray.join(' ');
    getNumber = Number(inputArray[0]);
    pokemonId = getNumber;
    getPicture(ctx, getNumber);
    getTypes(ctx, getNumber);
    if (inputArray[1] == 'desc') getDescription(ctx, getNumber);
  } else {
    // ? If a string is to be returned, this block of code works.
    inputArray.shift();
    inputArray.join(' ');
    try {
      axios
        .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=898')
        .then(res => {
          let totalPokemonNumber = res.data.results.length;
          let found = false;
          for (let i = 0; i < totalPokemonNumber; i++) {
            // ? Pokemon names are scanned to prevent errors.
            if (inputArray[0] == res.data.results[i].name) {
              // ? If the input matches a name in the list, the code is continued.
              found = true;
              axios
                .get('https://pokeapi.co/api/v2/pokemon/' + inputArray[0])
                .then(res => {
                  try {
                    pokemonId = res.data.id;
                    pokemonName = res.data.name;
                    getPicture(ctx, pokemonId);
                    getTypes(ctx, pokemonName);
                    if (inputArray[1] == 'desc') getDescription(ctx, pokemonId);
                  } catch (e) {
                    console.log('Obtaining ID and name information', e);
                    bot.telegram.sendMessage(
                      process.env.GROUP_ID,
                      'ERROR: Obtaining ID and name information\n\n' +
                        e +
                        '\n\n' +
                        ctx.from.username +
                        ' said: ' +
                        ctx.message.text
                    );
                  }
                });
            }
          }
          if (!found) {
            ctx.replyWithMarkdown(
              'There is no pokémon with this ID or name. ' + usage
            );
          }
        });
    } catch (e) {
      console.log('Scanning the Pokémon list', e);
      bot.telegram.sendMessage(
        process.env.GROUP_ID,
        'ERROR: Scanning the Pokémon list\n\n' +
          e +
          '\n\n' +
          ctx.from.username +
          ' said: ' +
          ctx.message.text
      );
    }
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
