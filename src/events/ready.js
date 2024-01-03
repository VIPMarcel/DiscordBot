const { Collection } = require("discord.js")
const { client, invites } = require("../index.js")

const wait = require("timers/promises").setTimeout

module.exports = {
    name: "ready",

    async execute() {
        await wait(1000)

        client.guilds.cache.forEach(async (guild) => {
            const firstInvites = await guild.invites.fetch();

            invites.set(guild.id, new Collection(firstInvites.map((invite) => [invite.code, invite.uses])));
          });

        console.log(`Ready! Logged in as ${client.user.tag}! I'm on ${client.guilds.cache.size} guild(s)!`)
        client.user.setActivity({name: "mit dir!", type: "PLAYING"})
    }
}