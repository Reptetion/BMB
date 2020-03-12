
const Discord = require("discord.js");
  
const bot = new Discord.Client();
  
var prefix = process.env.PREFIX

exports.run = async(client, message, args) => {

    const suggest = message.content.replace(prefix + "suggest", "");
    if(!suggest) return message.channel.send('❌ Please provide a suggestion for me to send!')
    .then(msg => msg.delete(3000))
        
    const suggestion = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('New Suggestion!')
    .setDescription(suggest)
    .setFooter(`Suggested by ${message.author.tag}!`)
    client.channels.get('663065336958025789').send({ embed: suggestion }).then(async embedMessage => {
    await embedMessage.react("✅")
    await embedMessage.react("❌")
    message.channel.send('✅ Suggestion has been sent! Thanks for supporting us!').then(msg => msg.delete(5000))
    });

}    
           
