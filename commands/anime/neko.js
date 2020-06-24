const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: "neko",
  category: "anime",
  description: "Will send a hot humanoid cat",
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


    var nekoimg = await neko.sfw.neko()

let mana = new RichEmbed()
.setDescription(`What a disappointment... <:KyaruScream:725451208097267903>`)
.setImage(nekoimg.url)
.setColor("#576bff")
.setFooter("Request from: " + message.author.username, message.author.avatarURL)
.setTimestamp();

message.channel.send(mana);
}
}
