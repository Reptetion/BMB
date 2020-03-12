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

bot.on("ready", () => console.log("Created By Build My Bot."))
bot.login(process.env.TOKEN)

bot.on('ready', () => {

bot.user.setActivity('Build My Bot.')

})
bot.login(process.env.TOKEN)