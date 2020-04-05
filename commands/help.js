const Discord = require("discord.js");

let prefix = process.env.PREFIX

exports.run = async(client, message, args) => {

let help = new Discord.RichEmbed()
.setColor('#7739C4')
.setThumbnail(message.guild.iconURL)
.setTitle('Bot Help Page')
.setURL('https://discord.gg/JnafqVN')
.addField('You asked for help..right?', `I am ${client.user.username} a multipurpose bot for discord! I don't really have much to say but thank you for using me and type in **${prefix}commands** next time for a full list of commands! :)`)
.setFooter(`${prefix}commands or ${prefix}cmds! | ${message.client.user.username}`, message.author.avatarURL)
.setTimestamp()
message.author.send(help)
message.channel.send("📨 Check your DMs...I sent you a mail! :)")
.catch(err => message.channel.send("❌ Your DMs are closed so I can't send you the mail! :("))
.then(msg => msg.delete(5000))

}

