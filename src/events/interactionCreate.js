const { client } = require("../index.js")

module.exports = {
    name: "interactionCreate",
    
    /**
     * @param {import("discord.js").Interaction} interaction 
     */
    async execute(interaction) {
        if(!interaction.isCommand()) return

        const command = client.commands.get(interaction.commandName)

        if(command) {
            try {
                await command.execute(interaction)
            } catch(error) {
                console.log(error)

                if(interaction.deferred || interaction.replied) {
                    interaction.editReply("Es ist ein Fehler beim ausführen aufgetreten!")
                } else {
                    interaction.reply("Es ist ein Fehler beim ausführen aufgetreten!")
                }
            }
        }
    }
}