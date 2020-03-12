exports.run = async(client, message, args) => {

const Discord = require("discord.js");
  
const bot = new Discord.Client();

    if (message.author.id !== process.env.OWNER_ID)
    return message.channel.send('This command is reserved only for my ``Owner``!').then(msg => msg.delete(3500))
  
    message.channel.send('↪️ Refreshing...').then(() => {
    process.exit(1)
    });
  
    }
