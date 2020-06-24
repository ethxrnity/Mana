const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: "wallpaper",
  category: "anime",
  description: "Will send an anime wallpaper",
  run: async (client, message, args) => {
           const member = getMember(message, args.join(" "));
           const msg = await message.channel.send({embed: {
  color: 5729279,
  description: "<a:success_block:709642055382728710> The request was sent successfully and you will see the result soon...",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
}}).then(m => m.delete(1999));


    var wallpaper = await neko.sfw.wallpaper()

let mana = new RichEmbed()
.setDescription(`What a disappointment... <:KyaruScream:725451208097267903>`)
.setImage(wallpaper.url)
.setColor("#576bff")
.setFooter("Request from: " + message.author.username, message.author.avatarURL)
.setTimestamp();

message.channel.send(mana);
}
}
