exports.run = async(client, message, args) => {

let gambling = [
"🍪 You won a cookie!",
"😱 Congrats! You won **Discord Nitro** for life!",
"😭 Sadly, you wasted all your money and got dust.",
"🤖 You won a free custom bot from **Build My Bot**! (Just joking)",
"<:waitThatsIllegal:643255883098226705> You won a year of bad luck!"
]

var machine = Math.floor(Math.random() * gambling.length)
message.channel.send(gambling[machine])

}