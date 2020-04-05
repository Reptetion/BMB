const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let stats = new Discord.RichEmbed()
.setColor('#7739C4')
.setTitle('My Statistics')
.setDescription(
`Servers: ${message.client.guilds.size.toLocaleString()}\n` +
`Users: ${message.client.users.size.toLocaleString()}\n` +
`Channels: ${message.client.channels.size.toLocaleString()}`
)
.setFooter('Created By Reptetion#6379')
message.channel.send(stats)

}