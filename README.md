# PokédexBot
## What is this?
It is a Telegram Bot written with JavaScript and built using [PokeAPI](https://pokeapi.co/) (The RESTful Pokemon API).
## What does it to?
Pokédex Bot for Telegram can show you the list of all pokémon and give you the picture and description of that pokémon in return for you to enter the ID or name of the pokémon you requested.
## Changelog
### v1.1
 - The code has been simplified
 - Pokemon attribute information has been transformed a photo caption.
 - The getDescription feature was removed after the project was deployed due to the problems and not being useful.
 - Added random pokemon feature.
 - The quality of displayed photos has been improved.
### v1.0
 - Initial Release
## Requirements for Development
 - Bot Token from [@BotFather](https://t.me/BotFather)
 - Up to date [Node.js](https://nodejs.org/en/)
 - [npm](https://www.npmjs.com/) libraries: [telegraf.js](https://www.npmjs.com/package/telegraf), [axios](https://www.npmjs.com/package/axios) and [dotenv](https://www.npmjs.com/package/dotenv)
 - `.env` file in root directory
 - When you create the `.env` file, type `BOT_TOKEN=` followed by the Bot Token from BotFather to the right of the equals symbol.
 - Secondly, type `GROUP_ID=` in the second line of the `.env` file and then write the ID of the group you want to log in case the bot you created fails, to the right of the equals symbol. Note: The bot you create in this group, which will keep the error logs, must be a participant in the group. In addition, if you do not want to keep error logs, you can delete the relevant code block in the `ErrorHandler` function in the `index.js` file.
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
 - `/pk 1` - Bulbasaur's photo and stats
 - `/pk bulbasaur` - Bulbasaur's photo and stats
 - `/pk sandslash` - Sandslash's photo and stats
 - `/pk 139` - Omastar's photo and stats
 - `/pklist 2` - Shows pokémon from the second generation.
 - `/pklist 8` - Shows pokémon from the eighth generation.
