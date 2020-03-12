const Discord = require('discord.js')

exports.run = async(client, message, args) => {

message.channel.send('Getting Ping...')
.then(msg => {
setTimeout(function() {

const ping = new Discord.RichEmbed()  
.setColor('#7739C4')
.setDescription('Pong! ' + Math.round(message.client.ping) + 'ms')
msg.edit(ping)
  
}, 350)
})

}