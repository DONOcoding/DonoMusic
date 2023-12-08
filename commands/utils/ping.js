const { SlashCommandBuilder } = require("discord.js");


module.exports = {
  
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Renvoie le ping du bot.'),


    async run(interaction) {


        await interaction.reply(`Le ping est de : \`${interaction.client.ws.ping}ms\`.`);
    }
};