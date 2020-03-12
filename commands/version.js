const version = '0.0.1'

exports.run = async(client, message, args) => {

message.channel.send(`I am in version: **${version}**!`)

}

exports.config = {
aliases: ['model']
}