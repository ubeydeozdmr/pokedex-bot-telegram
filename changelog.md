# Changelog

## v1.1.0

- Some folder & file names changed.
  - An attempt was made to format the project structure as MVC.
  - For instance: `/src/models/pokemonListModel.js` instead of `/src/handlers/getPokemonListData.js`
- Inline buttons has been added.
  - Types and Abilities buttons has been added.
- User experience has been improved.
  -  You can now put spaces between words instead of short lines when typing Pokémon with names of 2 or more words.
  -  When you want to see a pokemon in the list after using the `/pklist <digit>` command, instead of entering the `/pk <pokémons name / ID>` command, you will be able to copy the code snippet to the right of each pokemon.
- New folder location is specified.
  - package.json now uses `/src/index.js` as the main file instead of `/index.js`.
- Added emojis for weight and length.
- Some bugs fixed
  - some word/numbers causing the crash, ID not showing, possible vulnerabilities etc.

## v1.0.1

- Telegraf.js has been upgraded from version 3.39.0 to version 4.7.0.

## v1.0.0

- Initial release & project re-created.
