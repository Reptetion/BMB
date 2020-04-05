const Discord = require("discord.js");

var prefix = process.env.PREFIX

exports.run = async(client, message, args) => {

const argss = message.content.replace(prefix, "").split(/ +/g);
argss.shift();
const takepic = message.mentions.members.first() || message.guild.members.get(argss[0]) || message.member; 
const avatar = new Discord.RichEmbed()
.setColor("#7739C4")
.setTitle("Picture is ready...!")
.setURL('https://discord.gg/JnafqVN')
.setImage(`${takepic.user.avatarURL}`)
.setFooter(`Snapped by ${message.author.tag} for ${takepic.user.tag}!`);
message.channel.send(avatar)
  
}

exports.config = {
aliases: ['av', 'pfp', 'icon']
}