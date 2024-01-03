const { SlashCommandBuilder } = require("@discordjs/builders")
const { PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("setverifychannel")
    .setDescription("Setze den Verifizierungs Kanal")
    .addChannelOption(option => {
        return option.setName("channel")
        .setDescription("Sende die Verifizierungs- Nachricht in diesen Kanal")
        .setRequired(true)
    })
    
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    
    /**
     * 
     * @param {import("discord.js").Interaction} interaction 
     * @returns 
     */
    async execute(interaction) {
        const channel = interaction.options.getChannel("channel")
        const verifyEmbed = new EmbedBuilder()
            .setTitle("Verifizierung")
            .setDescription("Klicke auf den Knopf um dich als echten Menschen zu verifizieren und Zugriff auf Kanäle zu bekommen.")
            .setColor("Green")

        let sendChannel = channel.send({
            embeds: [verifyEmbed],
            components: [
                new ActionRowBuilder()
                    .setComponents(
                        new ButtonBuilder()
                        .setCustomId("verify")
                        .setLabel("Verifizieren")
                        .setStyle(ButtonStyle.Success)
                )
            ]
        })

        if(!sendChannel) {
            return interaction.reply({content: "Ein Fehler mit dem Kanal ist aufgetreten!", ephemeral: true})
        } else {
            return interaction.reply({content: "Der Kanal wurde erfolgreich gesetzt!", ephemeral: true})
        }
    }
}