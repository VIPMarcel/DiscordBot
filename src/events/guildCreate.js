const { Guild } = require("discord.js")
const { invites } = require("../index.js")

module.exports = {
    name: "guildCreate",

    /**
     * @param {Guild} guild 
     */
    async execute(guild) {
        guild.invites.fetch().then(guildInvites => {
            invites.set(guild.id, new Map(guildInvites.map((invite) => [invite.code, invite.uses])));
          })
    }
}