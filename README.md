# PokédexBot
## What is this?
It is a Telegram Bot written with JavaScript. In addition, [telegraf.js v3](https://telegraf.js.org) and [axios](https://www.npmjs.com/package/axios), which are [node.js](https://nodejs.org/en/) modules were used.
## What does it to?
Pokédex Bot for Telegram can show you the list of all pokémon and give you the picture and description of that pokémon in return for you to enter the ID or name of the pokémon you requested.
## Usage
If you have a Telegram account, you can start trying the bot by [clicking here.](https://t.me/rotompokedex_bot)
### To start the bot
    /start
### To get help
    /help
### To see the picture and stats of the pokemon you want
    /pk <pokemon's id or name>
### To see the picture, stats and descriptions of the pokemon you want
    /pk <pokemon's id or name> desc
### To see the list of pokemon belonging to the generation you specified
    /pklist <generation (a number between 1 and 8)>
### Examples
    /pk 1 - Bulbasaur's photo and stats
    /pk bulbasaur - Bulbasaur's photo and stats
    /pk sandslash desc - Sandslash's photo, stats and description
    /pk 139 desc - Omastar's photo, stats and descriptions
    /pklist 2 - Shows pokémon from the second generation.
    /pklist 8 - Shows pokémon from the eighth generation.
