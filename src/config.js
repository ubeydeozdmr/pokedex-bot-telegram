const MESSAGE_START = `Hello, I'm Pokédex Bot. I can show you the list of all pokémon and give you the picture and description of that pokémon in return for you to enter the ID or name of the pokémon you requested. Try entering the /help command to get help.`;
const MESSAGE_HELP = `You can search Pokédex Bot by both ID and name. To do this, type /pk and leave a space, then enter the ID or name of the pokémon and send the command. The ID can be a minimum of 1 and a maximum of 898.
*Usage:*
/pk \`<id/name>\` - Photo and stats of the pokémon you entered.
/pk \`random\` - Photo and stats of random pokémon.
/pklist \`<page number>\` - Shows the list of all pokémon from the page you entered.

*Examples:*
/pk 1 - Bulbasaur's photo and stats
/pk bulbasaur - Bulbasaur's photo and stats
/pk sandslash - Sandslash's photo and stats
/pk 139 - Omastar's photo and stats
/pklist 2 - Shows pokémon from the second generation.
/pklist 8 - Shows pokémon from the eighth generation.`;

const REJECT_INVALID_INPUT = `Please enter an ID or a pokemon name after /pk command. Use /help command to get help.`;
const NOT_FOUND_PKID = `There is no such pokemon ID. Try entering a number between 1-898`;
const NOT_FOUND_PKNAME = `There is no such pokemon name. Try using the /pklist command`;
const NOT_FOUND_LIST = 'The page number which you entered must be between 1-9';
const REJECT_LIST = `I can't show all pokémon at once.
      
Usage: /pklist <page (1-9)>
Examples:
/pklist 2
/pklist 8`;

module.exports = {
  MESSAGE_START,
  MESSAGE_HELP,
  REJECT_INVALID_INPUT,
  NOT_FOUND_PKID,
  NOT_FOUND_PKNAME,
  NOT_FOUND_LIST,
  REJECT_LIST,
};

/*
/pkeffect - Shows the list of all effects.
/pkeffect \`<effect name>\` - It gives information about the effect you entered and shows the list of pokémon with that effect.
/pktype - Shows the list of all types.
/pktype \`<type name>\` - It gives information about the type you entered and shows the list of pokémon with that type.
/pkeffect synchronize - Shows the list of all pokémon that have the synchronize feature.
/pktype fire - Shows the list of all fire type pokémon.
*/