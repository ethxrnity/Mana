const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
  name: "info",
  aliases: ["about", "bot", "botinfo"],
  category: "info",
  description: "Returns bot informations",
  run: async (client, message, args) => {
           const msg = await message.channel.send({embed: {
  color: 5729279,
  description: "<a:success_block:709642055382728710> The request was sent successfully and you will see the result soon...",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
}}).then(m => m.delete(1999));

    const useruser = "Request from: " + message.author.username;
const userurl = message.author.avatarURL;
let mana = new RichEmbed()
    .setColor("#576bff")
    .setThumbnail(client.user.avatarURL)
    .addField(`Bot information`, stripIndents`Developer: <@574849327650963469>
    Support server: [LINK](https://discord.gg/K83U2aC)
    Invite link: [LINK](https://discord.com/oauth2/authorize?client_id=588450296955535389&scope=bot&permissions=1345715264)`)
    .setFooter(useruser, userurl)
    .setTimestamp()

    message.channel.send(mana)


}
 }
