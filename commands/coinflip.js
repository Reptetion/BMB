exports.run = async(client, message, args) => {

var coins = ['Heads', 'Tails']

var coin = Math.floor(Math.random() * coins.length);

message.channel.send(coins[coin])

}

exports.config = {
aliases: ['flip']
}