const { Guild } = require("discord.js")
const { invites } = require("../index.js")

module.exports = {
    name: "guildDelete",

    /**
     * @param {Guild} guild 
     */
    async execute(guild) {
        invites.delete(guild.id);
    }
}