const { Client } = require('att-client');
const { attConfig } = require('./attConfig.js');
require("dotenv").config()
const { GatewayIntentBits, EmbedBuilder,Collection } = require("discord.js");
const Discord = require("discord.js");
const fs = require("fs");
const { createConnection } = require('net');
const functionDir = path.join(__dirname, 'functions');
const functions = fs.readdirSync(functionDir).filter(file => file.endsWith(".js"));
const eventDir = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventDir).filter(file => file.endsWith(".js"));
const commandsDir = path.join(__dirname, 'commands')
const commandFolders = fs.readdirSync(commandsDir).filter(file => file.endsWith(".js"));
const attbot = new Client(attConfig)
const token = process.env.D_TOKEN;
const bot = new Discord.Client({ intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds ] });
const connections = []
// Init discord commands,event,functions
bot.commands = new Collection();
for(const file of functions){
  require(`./functions/${file}`)(bot);
}
bot.handleCommands(commandFolders);
bot.handleEvents(eventFiles);
module.bot = bot; //! export discord bot

bot.login(token); // starts the bot

// discord bot ready event triggers att-bot startup 
bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);

    const serverID = "" // Put in the server id you wanna use must be restarted every time server goes online (USER CREDS ONLY)
    attbot.start() // will auto start if bot token exists else it'll open server connection to the server id
    if(attConfig.username != null)
    attbot.openServerConnection(parseInt(serverID))
    
  });

  attbot.on("ready", async (event) => {
    console.info("[AttBot] Ready");
  })

  attbot.on("connect", (connection) => { 
   console.info(`[AttBot] Connected to server: ${connection.server.id}`);
    connections.push(connection); // for bot cred use only but accessable for discord bot use see /commands/cmd.js
    module.connections = connections
  })

  



