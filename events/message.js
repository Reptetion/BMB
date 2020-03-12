const recentCommandUsage = new Set();

let prefix = process.env.PREFIX  

exports.run = async(client, message) => {
if (message.author.bot) return;
 
if (message.content.startsWith(prefix)) {
  
if(recentCommandUsage.has(message.author.id)){
message.reply('a bit too fast there!')
.then(msg => msg.delete(2500));
}else{

let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
const arg = message.content.slice(prefix.length).split(/ +/);
const commandName = arg.shift().toLowerCase();
const commandfile = client.commands.get(commandName) || client.aliases.get(commandName);  
if(!commandfile) return message.reply("that command doesn't exist!")
.then(msg => msg.delete(2500));
commandfile.run(client,message,args);
  
recentCommandUsage.add(message.author.id);
setTimeout(() => {
recentCommandUsage.delete(message.author.id)
}, 5500);
}
}
}
