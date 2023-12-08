const { SlashCommandBuilder } = require("discord.js");


module.exports = {
  
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Joue une chanson')
        .setDMPermissions(false)
        .setDefaultMemberPermissions(null)
        .addstringOption(opt => opt.setName('song').setDescription('La chanson à jouer').setRequired(true)),


    async run(interaction) {


        await interaction.deferReply({ephemeral: true});
        const song = interaction.options.getString("song");

        const voiceChannelMember = interaction.member.voice.channel;
        const voiceChannelBot = (await interaction.guild.members.fetchMe()).voice.channel;
        if(!voiceChannelMember) return await interaction.followUp("Vous devez être dans un salon vocal pour utiliser cette commande !");
        if(voiceChannelBot && voiceChannelBot.id !== voiceChannelMember.id) return await interaction.followUp
    
        const { track } = await interaction.client.player.play(voiceChannelMember, song, {
            requestedBy: interaction.user,
            nodeOptions: {
                metadata: interaction,
                volume: 70,
                leaveOnStop: false,
                leaveOnEnd: false,
                selfDeaf: false, 
            }
        });


        await interaction.followUp(`\`${track.title}\` a été ajouté à la file d'attente !`);
    }
};