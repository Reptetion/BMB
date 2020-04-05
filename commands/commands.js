const Discord = require('discord.js')

var prefix = process.env.PREFIX

exports.run = async(client, message, args) => {

const commandslist = new Discord.RichEmbed()
.setColor('#7739C4')
.setTitle('Commands List')
.setURL('https://discord.gg/JnafqVN')
.setThumbnail(message.client.avatarURL)
.addField('Info Commands', 
prefix + 'help\n' +
prefix + 'commands\n' +
prefix + 'aboutus\n' +
prefix + 'ping\n' +
prefix + 'credits\n' +
prefix + 'invite\n' +
prefix + 'uptime\n' +
prefix + 'status\n' +
prefix + 'stats\n' +
prefix + 'changelog\n' +
prefix + 'version'
)
.addField('Fun Commands',
prefix + 'say\n' +
prefix + 'avatar\n' +
prefix + 'coinflip\n' +
prefix + 'cat\n' +
prefix + 'dog\n' +
prefix + 'number\n' +
prefix + '8ball\n' +
prefix + 'gamble\n' +
prefix + 'meme\n' 
)
.addField('Staff Commands',
prefix + 'kick\n' +
prefix + 'ban\n' +
prefix + 'purge\n' +
prefix + 'setnickname'
)
.addField('Utility Commands',
prefix + 'poll\n' +
prefix + 'embed\n' +
prefix + 'serverinfo\n' +
prefix + 'userinfo\n' +
prefix + 'report\n' +
prefix + 'suggest'
)
.addField('Level Up System',
prefix + 'profile\n' +
prefix + 'leaderboard\n' +
prefix + 'delete'
)
.addField('Owner Commands',
prefix + 'refresh' 
)
.addField('Total Commands', '34 In Total!')
.setTimestamp()
.setFooter('Created By Reptetion#6379', message.author.avatarURL)
message.channel.send(commandslist)

}

exports.config = {
aliases: ['cmds']
}
