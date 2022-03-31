# Pokedex Bot for Telegram

Note: The old version of the project has been migrated to the legacy branch. [Click here](https://github.com/ubeydeozdmr/pokedex-bot-telegram/tree/legacy) to view.

## What's new in version 1.1

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

[See full changelog](./changelog.md)

## What is it & what does it do?

This app is a Telegram bot made using node.js and PokeAPI. With this bot, you can see the list of pokemon or You can see the picture of the pokemon by entering the ID or name of the pokemon you want, its stats, types, physical characteristics, etc. you can see. You can [click here](https://t.me/rotompokedex_bot) to try it.

## Development

### Requirements

- A bot token from [@BotFather](https://t.me/BotFather)
- Up to date [node.js](https://nodejs.org/en/)
- `.env` file in root directory

### After that...

- Use `npm install` command to add project dependencies to your repo
- After creating the `.env` file, type `BOT_TOKEN=` followed by the token you got from BotFather.
- Use `npm start` command to start your project.
