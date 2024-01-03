const { EmbedBuilder, Typing } = require("discord.js");

module.exports = {
    name: "typingStart",

    /**
     * @param {Typing} typing 
     */
    execute(typing) {
        /**
         * const channel = typing.channel.send({
            embeds: [
                new EmbedBuilder()
                    .setTitle("STOP!!!!")
                    .setDescription(`${typing.member.toString()} hör auf zu schreiben!`)
                    .setThumbnail(typing.member.user.displayAvatarURL())
                    .setColor("DarkRed")
            ]
        })
         */
    }
}