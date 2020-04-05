const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  
let user = message.mentions.members.first() || message.guild.members.get(args[0]); 
  
if(!user) return message.channel.send('❌ Please provide a user or id for me to nickname!').then(msg => msg.delete(3000))
  
if (!message.member.hasPermission("MANAGE_NICKNAMES"))
return message.channel.send('❌ You do not have enough perms.').then(msg => msg.delete(5000))
  
if (!message.guild.me.hasPermission(["MANAGE_NICKNAMES"])) return message.channel.send("❌ I do not have the required perms.").then(msg => msg.delete(5000))
  
if (user.id === message.guild.ownerID || user === message.guild.owner) return message.channel.send("❌ That's rude to nickname the owner!").then(msg => msg.delete(5000))
  
if (user.id === message.guild.me.id || user === message.guild.me) return message.channel.send("❌ I don't want a nickname!").then(msg => msg.delete(5000))
  
if(!user.kickable) return message.channel.send("❌ That's rude to nickname someone higher then you!").then(msg => msg.delete(5000))
  
if(!args[1]) return message.channel.send('❌ Please provide a nickname!').then(msg => msg.delete(3000))
  
if(args[1].length > 32) return message.channel.send('❌ Nicknames must be 32 characters or less!').then(msg => msg.delete(5000))
  
if(args.slice(1).join(' ') === user.displayName) return message.channel.send('❌ That user already have that nickname!').then(msg => msg.delete(5000))
  
const nickname = new Discord.RichEmbed()
.setColor('#7739C4')
.setDescription(`✅ The user: \`${user.user.username}\` has been changed to: \`${args.slice(1).join(' ')}\`!`)
.setFooter('Created By Reptetion#6379', user.avatarURL)
.setTimestamp()
message.channel.send(nickname)
user.setNickname(args.slice(1).join(' ')); 
  
}

exports.config = {
aliases: ['setnick']
}