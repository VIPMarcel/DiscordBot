const { GuildMember, EmbedBuilder } = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    
    /**
     * @param {GuildMember} member 
     */
    execute(member) {
        const channel = member.guild.channels.cache.get("1191537524301107220").send({
            embeds: [
                new EmbedBuilder()
                    .setTitle("Und Tschüss!")
                    .setDescription(`${member.toString()} hat den Server verlassen!`)
                    .setThumbnail(member.user.displayAvatarURL())
                    .setColor("Red")
            ]
        })
    }
}