const {EmbedBuilder, ChannelType,SlashCommandBuilder,PermissionsBitField } = require('discord.js');
const connections = require("../index")
module.exports = {
    
        data: new SlashCommandBuilder().setName("cmd").setDescription("run a command in the att server").addStringOption(option => option.setName('command').setDescription('The command you wish to send to the server').setRequired(true)),
            
        async execute(interaction) {
                const connection = connections[0]

                if(!connection){
                    return interaction.reply("No connection found")
                }
                else{
                    try{

                        connection.send(interaction.options.getString('command'))
                    }catch(error){
                        return interaction.reply(error)
                    }
                }

        }
    }