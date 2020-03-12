exports.run = async(client, message, args) => {

message.channel.send('✅ I am all good and ready to go!')
.catch(err => message.channel.send("❌ Oops! Looks like I'm not in good shape!"))

}