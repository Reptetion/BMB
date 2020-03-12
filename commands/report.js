const Discord = require('discord.js')

var prefix = process.env.PREFIX

exports.run = async(client, message, args) => {

    const reportthing = message.content.replace(prefix + "report", "");
    if(!reportthing) return message.channel.send('❌ Please provide a report for me to send!')
    .then(msg => msg.delete(3000))
        
    const report = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('New Report!')
    .setDescription(reportthing)
    .setFooter(`Reported by ${message.author.tag} from ${message.guild.name}!`)
    client.channels.get('687064838756892714').send({ embed: report }).then(async embedMessage => {
    message.channel.send('✅ Report has been sent! Thanks for helping!').then(msg => msg.delete(5000))
    });

}    