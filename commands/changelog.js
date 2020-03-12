const Discord = require('discord.js')

exports.run = async(client, message, args) => {

const changelog = new Discord.RichEmbed()
.setColor('#7739C4')
.setTitle('Updates for this bot')
.setDescription(
"Build My Bot is ready to be released to the public for some time."
)
.setFooter('Created By Reptetion#0002')
message.channel.send(changelog)

}

exports.config = {
aliases: ['updates']
}