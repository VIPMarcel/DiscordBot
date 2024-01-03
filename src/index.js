require("dotenv").config()
const fs = require("fs")
const { Client, Collection, GatewayIntentBits } = require("discord.js")

const invites = new Collection()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildInvites
    ]
})

exports.invites = invites
exports.client = client

client.commands = new Collection()

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"))

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`)
    client.commands.set(command.data.name, command)
})

eventFiles.forEach(eventFile => {
    const event = require(`./events/${eventFile}`)
    client.on(event.name, (...args) => event.execute(...args))
})

client.login(process.env.DISCORD_BOT_TOKEN)