const { EmbedBuilder, Invite } = require("discord.js")
const { invites } = require("../index.js")

module.exports = {
    name: "inviteDelete",

    /**
     * @param {Invite} invite 
     */
    execute(invite) {

        const channel = invite.channel.send({
            embeds: [
                new EmbedBuilder()
                    .setTitle("Invite gelöscht")
                    .setDescription(`${invite.toString()}`)
                    .setColor("DarkGold")
            ]
        })

        invites.get(invite.guild.id).delete(invite.code);
    }
}