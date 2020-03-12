exports.run = async(client, message, args) => {
  
    if (isNaN(args[0]) || parseInt(args[0] <= 0)) return message.channel.send('> <a:checkno:672262589606002716> Please provide a amount! No letters.').then(msg => msg.delete(3000))
     
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