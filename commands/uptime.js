exports.run = async(client, message, args) => {

var prefix = process.env.PREFIX
    
if (message.content.startsWith(prefix + "uptime")) {
    const ms = require("ms")
    var uptime = `My Uptime is ${ms(client.uptime}!`
    message.channel.send(uptime)
    }
}
    
