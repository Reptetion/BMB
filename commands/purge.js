exports.run = async(client, message, args) => {
  
    if (!message.guild.me.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("❌ I do not have the required permissions!").then(msg => msg.delete(5000))
  
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send('❌ You do not have the required permissions!').then(msg => msg.delete(5000))
  
    if (isNaN(args[0]) || parseInt(args[0] <= 0)) return message.channel.send('❌ Please provide a amount! No letters.').then(msg => msg.delete(3000))
     
    let deleteAmmount;

    if (parseInt(args[0] > 100)) {
        deleteAmmount - 100;
    } else {
        deleteAmmount = parseInt(args[0])
    }

    message.channel.bulkDelete(deleteAmmount, true)
    .then(deleted => message.channel.send(`✅ I deleted \`${deleted.size}\` message(s)`)).then(msg => msg.delete(5000))
    .catch(err => message.channel.send('❌ There was a error in the process!')).then(msg => msg.delete(5000))
}

exports.config = {
aliases: ['clear']
}