const Discord = require('discord.js')

const owner = 'Reptetion#0002'

exports.run = async(client, message, args) => {
  
const credits = new Discord.RichEmbed() 
.setColor('#7739C4')
.setTitle('Contributers Of BMB')
.setURL('https://discord.gg/JnafqVN')
.setDescription(
'**Owner Of The Bot**: ' + owner + '\n' +
'**Open Source Name**: Build My Bot\n' +
'**BMB Developer**: Reptetion#0002\n' +
'**BMB Founder**: Sleepless Kyru#7615'
)
.setTimestamp()
.setFooter('Thanks to all those that helped BMB!', message.author.avatarURL)
message.channel.send(credits)
  
}

