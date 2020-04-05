const server = require('./server.js')
const Discord = require("discord.js");
const bot = new Discord.Client()
const fs = require("fs");


//Command Handler
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      bot.commands.set(commandName, props);
      if (props.config) {
      props.config.aliases.forEach(alias => bot.aliases.set(alias, props));
      }
    });
  });
  //Events "handler"
    fs.readdir('./events/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./events/${file}`);
            let eventName = file.split(".")[0];
            bot.on(eventName, (...args) => eventFunc.run(bot, ...args));
        });
    
});
//Events "handler"
    fs.readdir('./xpsystem/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./xpsystem/${file}`);
            let eventName = file.split(".")[0];
            bot.on(eventName, (...args) => eventFunc.run(bot, ...args));
        });
    
});


 
bot.on("ready", () => console.log("Created By Build My Bot."))
bot.login(process.env.TOKEN)

bot.on('ready', () => {

let prefix = process.env.PREFIX

const activities = [
`${bot.users.size.toLocaleString()} users!`,
`${prefix}commands :)`,
`${bot.guilds.size.toLocaleString()} server(s)!`,
'Build My Bot'
];

setInterval(() => {
let activity = activities[Math.floor(Math.random() * activities.length)];
bot.user.setActivity(activity, { type: "LISTENING" });
}, 10000);

bot.user.setStatus("online").catch(console.error);
  

})
bot.login(process.env.TOKEN)