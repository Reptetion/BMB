const Discord = require("discord.js");

const prefix = process.env.PREFIX

const superagent = require("superagent");

const request = require('request');

const fs = require("fs")

module.exports.run = async (bot, message, args) => {
     
    if (message.author.id !== process.env.OWNER_ID) 
    return message.channel.send('This command is reserved only for my ``Owner``!').then(msg => msg.delete(3500))
    
    const filter = m => m.author.id === message.author.id;
    message.channel.send("Please type below your help description. You have 2 minutes starting now!")
  
    message.channel.awaitMessages(filter, {max: 1, time: 120000 }).then(collected => {
        
    let accept = collected.first().content;
    message.channel.send('✅ I successfully saved your help page!').then(message.delete(2500))

    let helpMessage = JSON.parse(fs.readFileSync("./data/helpmessage.json", "utf8"))
        
    helpMessage[message.guild.id] = {
    helpmessage: accept
           
    }

    fs.writeFile("./helpmessage.json", JSON.stringify(helpMessage), (err) => {

    console.log(err)
    
    });

    })
    

}


  
