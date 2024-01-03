const { client } = require("../index.js")

module.exports = {
    name: "interactionCreate",
    
    /**
     * @param {import("discord.js").Interaction} interaction 
     */
    async execute(interaction) {
        if(!interaction.isButton()) return

        if(interaction.customId === "verify") {
            const role = interaction.guild.roles.cache.get("1191894904843026573")

            await interaction.member.roles.add(role)
            interaction.reply({content: "Erfolgreich verifiziert!", ephemeral: true})
        }
    }
}