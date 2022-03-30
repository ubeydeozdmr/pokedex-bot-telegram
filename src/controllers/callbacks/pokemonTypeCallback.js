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

module.exports = pokemonTypeCallback;
