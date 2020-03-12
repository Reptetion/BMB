const Discord = require('discord.js');

const bot = new Discord.Client();

exports.run = async(client, message, args) => {

    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }
  
    const moment = require("moment");
    
    const member = message.guild.member(user);
    
    const userinfo = new Discord.RichEmbed()
        .setColor("#7739C4")
        .setTitle("USer Information")
        .setURL('https://discord.gg/JnafqVN')
        .setThumbnail(user.avatarURL)
        .addField(`${user.tag}`, `${user}`)
        .addField("ID:", `${user.id}`)
        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`)
        .addField("Status:", `${user.presence.status}`)
        .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`)
        .addField("Bot:", `${user.bot}`)
        .addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`)
        .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`) 
        .addField("Acknowledgements", member.highestRole.name)
        .setFooter(`Requested by ${message.author.tag}`, user.avatarURL)
    message.channel.send(userinfo);

}

exports.config = {
aliases: ['ui']
}