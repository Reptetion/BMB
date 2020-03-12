exports.run = async(client, message, args) => {

const Discord = require('discord.js')

var prefix = process.env.PREFIX

    const embedsay = message.content.replace(prefix + 'embed', "");
    message.delete().catch(O_o=>{});   
      
    if(!embedsay) return message.channel.send('Please specify something to say in the embed.').then(msg => msg.delete(3000))
      
    const embedtext = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setDescription(embedsay)
    message.channel.send(embedtext)
    }
