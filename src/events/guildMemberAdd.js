const { GuildMember, EmbedBuilder } = require("discord.js");
const { client, invites } = require("../index.js")

module.exports = {
    name: "guildMemberAdd",
    
    /**
     * @param {GuildMember} member 
     */
    async execute(member) {
        const newInvites = await member.guild.invites.fetch()
        const oldInvites = invites.get(member.guild.id)
        const invite = newInvites.find(i => i.uses > oldInvites.get(i.code))
        const inviter = await client.users.fetch(invite.inviter.id)

        if(inviter) {
            const channel = member.guild.channels.cache.get("1191537524301107220").send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("Herzlich Willkommen")
                        .setDescription(`${member.toString()} ist dem Server beigetreten!\n
                        Eingeladen von » ${inviter.tag}\n
                        Code » ${invite.code}\n
                        Benutzung des Codes » ${invite.uses}x`)
                        .setThumbnail(member.user.displayAvatarURL())
                        .setColor("Green")
                ]
            })
        } else {
            const channel = member.guild.channels.cache.get("1191537524301107220").send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("Herzlich Willkommen")
                        .setDescription(`${member.toString()} ist dem Server beigetreten!`)
                        .setThumbnail(member.user.displayAvatarURL())
                        .setColor("Green")
                ]
            })
        }

        /**
         * inviter
    ? logChannel.send(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`)
    : logChannel.send(`${member.user.tag} joined but I couldn't find through which invite.`);
         */
    }
}