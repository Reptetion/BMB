const version = '0.0.2'

exports.run = async(client, message, args) => {

message.channel.send(`I am in version: **${version}**!`)

}

exports.config = {
aliases: ['model']
}