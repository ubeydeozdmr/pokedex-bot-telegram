# PokédexBot
## What is this?
It is a Telegram Bot written with JavaScript and built using [PokeAPI](https://pokeapi.co/) (The RESTful Pokemon API).
## What does it to?
Pokédex Bot for Telegram can show you the list of all pokémon and give you the picture and description of that pokémon in return for you to enter the ID or name of the pokémon you requested.
## Requirements for Development
 - Bot Token from [@BotFather](https://t.me/BotFather)
 - Up to date [Node.js](https://nodejs.org/en/)
 - `.env` file in root directory
 - When you create the `.env` file, type `BOT_TOKEN=` followed by the Bot Token from BotFather to the right of the equals symbol.
 - Use this command to add project dependencies to your repo: 
 `npm install`
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
    /pklist <page (a number between 1 and 9)>
### Examples
 - `/pk 1` - Bulbasaur's photo and stats
 - `/pk bulbasaur` - Bulbasaur's photo and stats
 - `/pk sandslash` - Sandslash's photo and stats
 - `/pk 139` - Omastar's photo and stats
 - `/pklist 2` - Shows pokémon from the second page.
 - `/pklist 8` - Shows pokémon from the eighth page.
