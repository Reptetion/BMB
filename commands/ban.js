exports.run = async(client, message, args) => {


    if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.channel.send('❌ You do not have the require permissions.').then(msg => msg.delete(5000))
  
    if (!message.guild.me.hasPermission(["KICK_MEMBERS"])) return message.channel.send("❌ I do not have the required permissions!").then(msg => msg.delete(5000))
  
    const user = message.mentions.users.first() 
    
    const prefix = process.env.PREFIX
    
    var reason = message.content.replace(prefix + "ban", "");
    
    if(user) {
    const member = message.guild.member(user) 

    if(member){
    member.ban(reason).then(() =>{
    message.channel.send(`✅ Successfully banned **${member.user.tag}**`) 
    member.send(`❌ You were **banned** from **${message.guild}** for:` + reason)
    }).catch(err =>{
    message.channel.send(`❌ I was unable to ban ${user.tag}`).then(msg => msg.delete(3000));
    console.log(err);
    })
    }
    }else {
    message.channel.send("❌ Please specify a user to ban!").then(msg => msg.delete(3000));
    }
     
 }