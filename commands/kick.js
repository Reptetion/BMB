exports.run = async(client, message, args) => {


    if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.channel.send('❌ You do not have the require permissions. ').then(msg => msg.delete(5000))
  
    if (!message.guild.me.hasPermission(["KICK_MEMBERS"])) return message.channel.send("❌ I do not have the required permissions!").then(msg => msg.delete(5000))
  
    const user = message.mentions.users.first() 
    
    const prefix = process.env.PREFIX
    
    var reason = message.content.replace(prefix + "kick", "");
    
    if(user) {
    const member = message.guild.member(user) 

    if(member){
    member.kick(reason).then(() =>{
    message.channel.send(`✅ Successfully kicked **${member.user.tag}**`) 
    member.send(`❌ You were **kick** from **${message.guild}** for:` + reason)
    }).catch(err =>{
    message.channel.send(`❌ I was unable to kick ${user.tag}`).then(msg => msg.delete(3000));
    console.log(err);
    })
    }
    }else {
    message.channel.send("❌ Please specify a user to kick!").then(msg => msg.delete(3000));
    }
     
 }