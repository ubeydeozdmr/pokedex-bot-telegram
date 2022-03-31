const getPokemonTypeModel = require('../../models/pokemonTypeModel');
const getPokemonTypeView = require('../../views/pokemonTypeView');

const pokemonTypeCallback = async (bot, ctx, _types) => {
  const typesArr = new Array();
  const types = { ..._types };
  Object.values(types).forEach(val => {
    typesArr.push(val.type.name);
  });
  typesArr.forEach(async type => {
    const pokemonTypeData = await getPokemonTypeModel(type);
    getPokemonTypeView(bot, ctx, ...pokemonTypeData);
  });
};

/*
In fact, when you get a pokemon with the /pk command and press the Types button
at the bottom, it shows all the types of that bot, no matter how many (a similar
situation is valid for the Abilities button). As a result, a very long message
thread is formed and I think this is not a good situation for user experience.
That's why I tried to let the user decide which type they want to choose when
the Types button is pressed. But this feature is not working properly at the
moment and it is hard-coded, so I didn't add this feature in v1.1 version.
*/

// const pokemonTypeCallbackV2 = async (bot, destination, _types) => {
//   let pokemon = '';
//   console.log(_types);
//   const typesArr = new Array();
//   const types = { ..._types };
//   Object.values(types).forEach(val => {
//     let typeName = val.type.name[0].toUpperCase() + val.type.name.slice(1);
//     typesArr.push({ text: typeName, callback_data: `t-${val.type.name}` });
//     bot.action(`t-${val.type.name}`, async ctx => {
//       ctx.deleteMessage();
//       const pokemonTypeData = await getPokemonTypeModel(val.type.name);
//       if (pokemonTypeData) getPokemonTypeView(bot, ctx, ...pokemonTypeData);
//       bot.action(`pt-${val.type.name}`, ctx => {
//         // ctx.deleteMessage();
//         ctx.replyWithMarkdown(`*Pokemon List:*
//     ${pokemon}
// `);
//       });
//     });
//   });
//   bot.telegram.sendMessage(
//     destination,
//     `Please select a type to show details`,
//     { parse_mode: 'MarkdownV2', reply_markup: { inline_keyboard: [typesArr] } }
//   );
// };

module.exports = pokemonTypeCallback;
// module.exports = pokemonTypeCallbackV2;
