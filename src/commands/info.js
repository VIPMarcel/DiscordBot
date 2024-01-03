const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Zeigt Informationen zu einem bestimmten Server / Benutzer.")
    .addSubcommand(subCommand => subCommand.setName("server").setDescription("Zeigt Informationen über den Server an."))
    .addSubcommand(subCommand => subCommand.setName("member").setDescription("Zeigt Informationen über den Benutzer an.")
    .addUserOption(option => option.setName("member").setDescription("Der Benutzer").setRequired(true))),

    async execute(interaction) {
        switch(interaction.options.getSubcommand()) {
            case "server": {
                interaction.reply({embeds: [
                    new EmbedBuilder()
                    .setTitle(`Informationen über den Server: ${interaction.guild.name}`)
                    .addFields([
                        {
                            name: "Channels",
                            value: `${interaction.guild.channels.cache.size} Channels`
                        },
                        {
                            name: "Erstellt",
                            value: `<t:${Math.round(interaction.guild.createdTimestamp/1000)}>`,
                            inline: true
                        }
                    ])
                ]})
                break
            }

            case "member": {
                const member = interaction.options.getMember("member")

                interaction.reply({embeds: [
                    new EmbedBuilder()
                    .setTitle(`Informationen über den Benutzer: ${member.user.tag}`)
                    .setThumbnail(member.user.avatarURL({dynamic: true}))
                    .addFields([
                        {
                            name: "Account erstellt am:",
                            value: `<t:${Math.round(member.user.createdTimestamp/1000)}>`
                        },
                        {
                            name: "Server betreten am:",
                            value: `<t:${Math.round(member.joinedTimestamp/1000)}>`,
                            inline: true
                        }
                    ])
                ]})
                break
            }
        }
    }
}