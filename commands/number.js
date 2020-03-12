const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  
let randomnumber = Math.floor(Math.random() * 100).toLocaleString()
  
const result = new Discord.RichEmbed()
.setColor('#7739C4')
.setDescription(`${randomnumber}`)
.setFooter('Created By Reptetion#0002')
message.channel.send(result) 
  
}

exports.config = {
aliases: ['rdmnbr', 'random']
}