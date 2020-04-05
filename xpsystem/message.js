const Discord = require('discord.js');
const leveling = require('discord-leveling');
 

const client = new Discord.Client();
 

const settings = {
prefix: process.env.PREFIX,
token: process.env.TOKEN
}
 

exports.run = async(client, message) => {
  
var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
 
var args = message.content.split(' ').slice(1);
 
if (message.author.bot) return;

 
var profile = await leveling.Fetch(message.author.id)
leveling.AddXp(message.author.id, 10)
if (profile.xp + 10 > 100) {
await leveling.AddLevel(message.author.id, 1)
await leveling.SetXp(message.author.id, 0)
message.reply(`GG! You just advanced to level ${profile.level + 1}! 🆙`).then(msg => msg.delete(10000));
}
 

if (!message.content.startsWith(settings.prefix)) return;
 

if (command === 'profile') {
 
var user = message.mentions.users.first() || message.author
 
var output = await leveling.Fetch(user.id)

let profile = new Discord.RichEmbed()
.setColor('#7739C4')
.setTitle(`${user.username}'s Rank Card`)
.setURL('https://discord.gg/aA9mU4x')
.setDescription(`${user.tag}\nLevel: **${output.level}**\nXP: **${output.xp}**`)
.setFooter('Keep on chatting to level up!', user.avatarURL)
message.channel.send(profile)
}
 
if (command === 'leaderboard') {
 
if (message.mentions.users.first()) {
 
var output = await leveling.Leaderboard({
search: message.mentions.users.first().id
})
      
message.channel.send(`✅ The user ${message.mentions.users.first().tag} is number ${output.placement} on the leaderboard!`);
 
} else {
 
leveling.Leaderboard({
limit: 5
}).then(async users => { 
 
if (users[0]) var firstplace = await client.fetchUser(users[0].userid) 
if (users[1]) var secondplace = await client.fetchUser(users[1].userid) 
if (users[2]) var thirdplace = await client.fetchUser(users[2].userid) 
if (users[3]) var fourthplace = await client.fetchUser(users[3].userid) 
if (users[4]) var fifthplace = await client.fetchUser(users[4].userid) 

let leaders = new Discord.RichEmbed()
.setColor('#7739C4')
.setURL('https://discord.gg/aA9mU4x')
.setTitle('Leaderboard')
.setDescription(`
1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].level || 'None'} : ${users[0] && users[0].xp || 'None'}
2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].level || 'None'} : ${users[1] && users[1].xp || 'None'}
3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].level || 'None'} : ${users[2] && users[2].xp || 'None'}
3 - ${fourthplace && fourthplace.tag || 'Nobody Yet'} : ${users[3] && users[3].level || 'None'} : ${users[3] && users[3].xp || 'None'}
3 - ${fifthplace && fifthplace.tag || 'Nobody Yet'} : ${users[4] && users[4].level || 'None'} : ${users[4] && users[4].xp || 'None'}
`)
.setFooter('Top 5 Leveled Up Users!', message.author.avatarURL)
message.channel.send(leaders)
})
 
}
}

if (command == 'delete') { 
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('❌ You are not a admin!').then(msg => msg.delete(5000))
 
var user = message.mentions.users.first()
if (!user) return message.channel.send('❌ Please specify a user I have to delete in my database!').then(msg => msg.delete(3000))
 
var output = await leveling.Delete(user.id)
if (output.deleted == true) return message.reply('✅ Succesfully deleted the user out of the database!')
 
message.channel.send('❌ Error: Could not find the user in database.')
 
}
}
 

client.login(settings.token)