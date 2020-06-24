const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: "cuddle",
  category: "anime",
  description: "Will cuddle a specific user!",
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

let user = message.mentions.users.first();
if(!user) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:BootyShake:725465988728094822> Please mention the user and then resubmit the command!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
}});

    var cuddle = await neko.sfw.cuddle()

let mana = new RichEmbed()
.setTitle(`${message.member.displayName} cuddled ${member.displayName}`)
.setImage(cuddle.url)
.setColor("#576bff")
.setFooter("Request from: " + message.author.username, message.author.avatarURL)
.setTimestamp();

message.channel.send(mana);
}
}
