# PokédexBot
## What is this?
It is a Telegram Bot written with JavaScript and built using [PokeAPI](https://pokeapi.co/) (The RESTful Pokemon API). In addition, [telegraf.js v3](https://telegraf.js.org) and [axios](https://www.npmjs.com/package/axios), which are [node.js](https://nodejs.org/en/) modules were used.
## What does it to?
Pokédex Bot for Telegram can show you the list of all pokémon and give you the picture and description of that pokémon in return for you to enter the ID or name of the pokémon you requested.
## Changelog
### v1.1
 - The code has been simplified
 - The getDescription feature was removed after the project was deployed due to the problems and not being useful.
 - Added random pokemon feature.
 - The quality of displayed photos has been improved.
### v1.0
 - Initial Release
## Usage
If you have a Telegram account, you can start trying the bot by [clicking here.](https://t.me/rotompokedex_bot)
### To start the bot
    /start
### To get help
    /help
### To see the picture and stats of the pokemon you want
    /pk <pokemon's id or name>
### To see the picture and stats of the random pokemon
    /pk random
### To see the list of pokemon belonging to the generation you specified
    /pklist <generation (a number between 1 and 8)>
### Examples
    /pk 1 - Bulbasaur's photo and stats
    /pk bulbasaur - Bulbasaur's photo and stats
    /pk sandslash - Sandslash's photo and stats
    /pk 139 - Omastar's photo and stats
    /pklist 2 - Shows pokémon from the second generation.
    /pklist 8 - Shows pokémon from the eighth generation.
