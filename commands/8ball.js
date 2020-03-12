    const Discord = require('discord.js');
    const bot = new Discord.Client();
    var prefix = process.env.PREFIX
    
    exports.run = async(client, message, args) => {
      
    const question = message.content.replace(prefix + "8ball", "")
    if(!question) return message.channel.send('❌ Please provide a question!').then(msg => msg.delete(3000))
    
     const ball1 = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('8ball Results')
    .setURL('https://discord.gg/y44zCga')
    .addField('Question:', question)
    .addField('Answer:', 'It is a certain.')
    .setFooter('Created By Reptetion#0002')

     const ball2 = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('8ball Results')
    .setURL('https://discord.gg/y44zCga')
    .addField('Question:', question)
    .addField('Answer:', 'Concentrate and ask again.')
    .setFooter('Created By Reptetion#0002')
     
     const ball3 = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('8ball Results')
    .setURL('https://discord.gg/y44zCga')
    .addField('Question:', question)
    .addField('Answer:', 'My sources say no.')
    .setFooter('Created By Reptetion#0002')
     
     const ball4 = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('8ball Results')
    .setURL('https://discord.gg/y44zCga')
    .addField('Question:', question)
    .addField('Answer:', 'Without a doubt.')
    .setFooter('Created By Reptetion#0002')
     
     const ball5 = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('8ball Results')
    .setURL('https://discord.gg/y44zCga')
    .addField('Question:', question)
    .addField('Answer:', 'Better not tell you now.')
    .setFooter('Created By Reptetion#0002')
     
     const ball6 = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('8ball Results')
    .setURL('https://discord.gg/y44zCga')
    .addField('Question:', question)
    .addField('Answer:', 'Outlook not so good.')
    .setFooter('Created By Reptetion#0002')
     
     const ball7 = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('8ball Results')
    .setURL('https://discord.gg/y44zCga')
    .addField('Question:', question)
    .addField('Answer:', 'Yes.')
    .setFooter('Created By Reptetion#0002')
    
     const ball8 = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('8ball Results')
    .setURL('https://discord.gg/y44zCga')
    .addField('Question:', question)
    .addField('Answer:', 'No.')
    .setFooter('Created By Reptetion#0002')
     
     const ball9 = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('8ball Results')
    .setURL('https://discord.gg/y44zCga')
    .addField('Question:', question)
    .addField('Answer:', 'Cannot predict now.')
    .setFooter('Created By Reptetion#0002')
     
     const ball10 = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setTitle('8ball Results')
    .setURL('https://discord.gg/y44zCga')
    .addField('Question:', question)
    .addField('Answer:', 'Yes - definetely.')
    .setFooter('Created By Reptetion#0002')
     
    const balls = [ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10]
      
    var ball = Math.floor(Math.random() * balls.length);
     
    message.channel.send(balls[ball])

}

