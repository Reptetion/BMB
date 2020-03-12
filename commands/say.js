exports.run = async(client, message, args) => {

var prefix = process.env.PREFIX

    const say = message.content.replace(prefix + "say", "");
    message.delete().catch(O_o=>{}); 
  
    if(!say) return message.channel.send('Please specify what you want me to say.').then(msg => msg.delete(3000))
    
    message.channel.send(say);
    }
