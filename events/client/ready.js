const { Events, ActivityType } = require("discord.js");

module.exports = {

    name: Events.ClientReady,
    async run(client) {

        await client.application.commands.set(client.commands.map(command => command.data));
        console.log("[Interaction] => loaded !");
        client.user.setActivity("Détruire des mamans♥", { type: ActivityType.Streaming});


        console.log(`${client.user.username} is ready !`);

    }
};