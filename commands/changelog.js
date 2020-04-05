const Discord = require('discord.js')

exports.run = async(client, message, args) => {

const changelog = new Discord.RichEmbed()
.setColor('#7739C4')
.setURL('https://discord.gg/aA9mU4x')
.setTitle('Updates for this bot')
.setDescription(
"**What we added?**\n\n" +
'- Level Up System\n' +
"- Feature to not operate in DMs!\n" +
"- Removed the 'command not found' message!\n" +
'- Added & removed some commands! Also fixed some stuff.\n' +
'- 4 Custom status message intervals!\n' +
"- Ability to change 'online' to 'dnd' or 'idle'!\n\n" +
'This is our first update, even though some suggestions did not get added, we will still be looking into it! Enjoy! :)'
)
.setTimestamp()
.setFooter('Created By Reptetion#6379', message.author.avatarURL)
message.channel.send(changelog)

}

exports.config = {
aliases: ['updates']
}