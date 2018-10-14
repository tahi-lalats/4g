const { Client, Collection } = require('discord.js');

class BotDiscord extends Client {
  constructor (opt) {
    super (opt);
    
    this.queue = new Collection();
    this.util = require('./util.js');
  }
}

module.exports = BotDiscord;
