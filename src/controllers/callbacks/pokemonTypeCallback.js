const getPokemonTypeModel = require('../../models/pokemonTypeModel');
const getPokemonTypeView = require('../../views/pokemonTypeView');

const pokemonTypeCallback = async (bot, ctx, _types) => {
  const typesArr = new Array();
  const types = { ..._types };
  Object.values(types).forEach(val => {
    typesArr.push(val.type.name);
  });
  console.log(typesArr);
  console.log(ctx.update);
  typesArr.forEach(async type => {
    const pokemonTypeData = await getPokemonTypeModel(type);
    getPokemonTypeView(bot, ctx, ...pokemonTypeData);
  });
};

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
