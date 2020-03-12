exports.run = async(client, message, args) => {

          const Discord = require("discord.js");
    
          const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];

          const role = message.guild.roles.size;

          const moment = require("moment");

          const online = message.guild.members.filter(
          m => m.presence.status == "online"
          ).size;

          const idle = message.guild.members.filter(
          m => m.presence.status == "idle"
          ).size;

          const dnd = message.guild.members.filter(
          m => m.presence.status == "dnd"
          ).size;

          const offline = message.guild.members.filter(
          m => m.presence.status == "offline"
          ).size;

          const serverinfo = new Discord.RichEmbed()
            .setColor("#7739C4")
            .setTitle("Server Information")
            .setURL('https://discord.gg/JnafqVN')
            .addField(
            "Server Name",
            message.guild.name
            )
            .addField(
            "Server Region",
            message.guild.region.replace(/-/g, " ")
            )
            .addField(
            "Server Owner",
            message.guild.owner.user.tag
            )
            .addField(
            `Server Creation Date`,
            moment(message.guild.createdAt).format("LL")
            )
            .addField(
            `Verification Level`,
            `${verificationLevels[message.guild.verificationLevel]}`
            )
            .addField(
            "# Of Roles",
            message.guild.roles.size
            )
            .addField(
            "Member Count",
            `Total: ${message.guild.memberCount}\n Online: ${online}\n Idle: ${idle}\n DND: ${dnd}\n Offline:  ${offline}`
            )
            .addField(
            "Channel Count",
            `Text Channels: ${
            message.guild.channels.filter(chan => chan.type === "text").size
            } \n Voice Channels: ${
            message.guild.channels.filter(chan => chan.type === "voice").size
            }\n Categories: ${
            message.guild.channels.filter(chan => chan.type === "category").size
            }`
            )
            .setThumbnail(message.guild.iconURL)
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL);
          message.channel.send(serverinfo)

          }
          
          exports.config = {
          aliases: ['si']
          }