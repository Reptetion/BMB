exports.run = async(client, message, args) => {

    Image(message);
    
    }
      
    const Discord = require('discord.js')
    const cheerio = require('cheerio');
    const request = require('request');
    
    function Image(message){
    var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + "cat",
    method: "GET",
    headers: {
    "Accept": "text/html",
    "User-Agent": "Chrome"
    }
    };
      
    request(options, function(error, response, responseBody) {
    if (error) {
    return;
    }
     
     
    $ = cheerio.load(responseBody);
     
     
    var links = $(".image a.link");
     
    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
           
    console.log(urls);
     
    if (!urls.length) {
               
    return;
    }
     
    const meme = new Discord.RichEmbed()
    .setColor('#7739C4')
    .setImage(urls[Math.floor(Math.random() * urls.length)])
    .setTimestamp()
    .setFooter(`Asked By: ${message.author.username}`, message.author.avatarURL)
    message.channel.send(meme)
    })
    }
    