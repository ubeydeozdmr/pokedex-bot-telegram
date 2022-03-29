const getPokemonTypeModel = require('../../models/getPokemonTypeModel');
const getPokemonTypeView = require('../../views/getPokemonTypeView');

const pokemonTypeCallback = async (ctx, _types) => {
  const typesArr = new Array();
  const types = { ..._types };
  Object.values(types).forEach(val => {
    typesArr.push(val.type.name);
  });
  typesArr.forEach(async type => {
    const pokemonTypeData = await getPokemonTypeModel(type);
    getPokemonTypeView(ctx, ...pokemonTypeData);
  });
};

module.exports = pokemonTypeCallback;
