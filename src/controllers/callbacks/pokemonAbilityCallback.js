const getPokemonAbilityModel = require('../../models/pokemonAbilityModel');
const getPokemonAbilityView = require('../../views/pokemonAbilityView');

const pokemonAbilityCallback = async (ctx, _abilities) => {
  _abilities.forEach(async item => {
    const pokemonAbilityModel = await getPokemonAbilityModel(
      ctx,
      item.ability.name
    );
    getPokemonAbilityView(ctx, item.ability.name, pokemonAbilityModel);
  });
};

module.exports = pokemonAbilityCallback;
