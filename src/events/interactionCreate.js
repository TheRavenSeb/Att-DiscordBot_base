const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const Devs =[]// Insert your discord id here

module.exports = {
	name: "interactionCreate",
	async execute(interaction, client) {
const command = client.commands.get(interaction.commandName);
if (!interaction.isCommand()) return;
if (!command) return;

if (interaction.user.bot) return interaction.reply({ content: 'Bots cannot use this command', ephemeral: true});
if( command.DevOnly && !Devs.includes(interaction.user.id.toString())) return interaction.reply({ content: 'Are you a spriggull brain or what? you are not allowed to use this command'});

 try{  
await command.execute(interaction, client);
 } catch (error) {
console.error(error);
return interaction.followUp({ content: 'There was an error while executing this command!\n' + error, ephemeral: true });

}
}, 
};