const { EmbedBuilder, Invite } = require("discord.js")
const { invites } = require("../index.js")

module.exports = {
    name: "inviteCreate",

    /**
     * @param {Invite} invite 
     */
    execute(invite) {

        let maxUses = "Unendlich"
        let expiresAt = "nie"

        if(invite.maxUses != 0) {
            maxUses = invite.maxUses.toString()
        }

        if(invite.createdTimestamp < invite.expiresTimestamp) {
            expiresAt = `<t:${Math.round(invite.expiresTimestamp/1000)}>`
        }

        const channel = invite.channel.send({
            embeds: [
                new EmbedBuilder()
                    .setTitle("Invite erstellt")
                    .setDescription(`${invite.toString()}`)
                    .addFields([
                        {
                            name: "Erstellt am:",
                            value: `<t:${Math.round(invite.createdTimestamp/1000)}>`,
                            inline: true
                        },
                        {
                            name: "Läuft ab:",
                            value: expiresAt,
                            inline: true
                        },
                        {
                            name: "Ersteller:",
                            value: `${invite.inviter.tag}`,
                            inline: true
                        },
                        {
                            name: "Maximale Benutzungen:",
                            value: `${maxUses}`,
                            inline: true
                        }
                    ])
                    .setColor("DarkGold")
            ]
        })

        invites.get(invite.guild.id).set(invite.code, invite.uses)
    }
}