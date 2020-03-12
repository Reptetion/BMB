const Discord = require('discord.js')

exports.run = async(client, message, args) => {

const invite = new Discord.RichEmbed()
.setColor('#7739C4')
.setDescription('[Click Here To Invite Me](https://discordapp.com/api/oauth2/authorize?client_id='+message.client.user.id+'&permissions=4586695&scope=bot)')
message.channel.send(invite)
}
    