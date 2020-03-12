const Discord = require("discord.js");

const prefix = '!'

const superagent = require("superagent");

const request = require('request');

const fs = require("fs")

exports.run = async(client, message, args) => {


module.exports.run = async (bot, message, args) => {
    let helpMessage = JSON.parse(fs.readFileSync("./data/helpmessage.json", "utf8"))

    let help_message = helpMessage[message.guild.id].helpmessage
    
    if(!help_message) return message.channel.send("This bot currently doesn't have a help page.")

    let help = new Discord.RichEmbed()
    .setColor("#7739C4")
    .setTitle(`${message.guild.name} | Help Page`)
    .setURL('https://discord.gg/JnafqVN')
    .setThumbnail(message.guild.iconURL)
    .setDescription(`${help_message}`)

    message.channel.send(help)

}
}
