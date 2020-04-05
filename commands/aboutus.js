const Discord = require('discord.js')

const developer = 'Reptetion#6379'

exports.run = async(client, message, args) => {

const about = new Discord.RichEmbed() 
.setColor('#7739C4')
.setTitle('Build My Bot | Who Are We?')
.setURL('https://discord.gg/JnafqVN')
.setDescription(`Hello! Did you know I was made by **Build My Bot**, a bot building service, developed by **${developer}**?\n\n` +
'**What is Build My Bot?**\n\n' +
'Build My Bot is a free open bot source that allows users to use easily and interact with Discord better!\n\n' +
'It is easy to use and always being updated. We take suggestions from the community so you can have a better experience.\n\n' +
'Build My Bot: [Click Here To Join!](https://discord.gg/JnafqVN)'
)
.setTimestamp()
.setFooter(`Created By ${developer}`, message.author.avatarURL)
message.channel.send(about)
}

exports.config = {
aliases: ['bmb']
}