exports.run = async(client, message, args) => {

const Discord = require('discord.js')

var prefix = process.env.PREFIX

    const question = message.content.replace(prefix + 'poll', "");
    message.delete().catch(O_o=>{});  
      
    if(!question) return message.channel.send('❌ Please provide a question!').then(msg => msg.delete(3000));
      
    const poll = new Discord.RichEmbed() 
    .setColor('#7739C4')
    .setTitle(`Poll Created By ${message.author.tag}!`)
    .setDescription(question)
    .setFooter("React to vote. Can't wait to see the results!", message.author.avatarURL)
    message.channel.send({ embed: poll }).then(async embedMessage => {
         await embedMessage.react("✅");
         await embedMessage.react("❌")
    });

      

}
