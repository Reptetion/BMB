exports.run = async(client, message, args) => {

var prefix = process.env.PREFIX
    
if (message.content.startsWith(prefix + "uptime")) {

const momentDurationFormat = require("moment-duration-format");
const uptime = require("moment")
.duration(process.uptime() * 1000)
.format("d[d][,] h[h][,] m[m] [and] s[s]");
message.channel.send(uptime)
}

}
    