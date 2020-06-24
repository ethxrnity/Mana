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
    .setDescription("<a:allthese100s:722375406749220885> Are you looking for a new and high-quality bot for your Discord server? **[Invite](https://discord.gg/K83U2aC)** Mana right now to your Discord server! \n\n<:Bug:722199787117477911> If any problem, bug, power cut or new idea occurs, contact the Developer: <@574849327650963469> or join our **[Support Server](https://discord.gg/XAxGtXA)**.\n")
    .addField(`Important information`, stripIndents`
    Developer: <@574849327650963469>
    Support server: **[INVITE](https://discord.gg/K83U2aC)**
    Invite link: **[LINK](https://discord.com/oauth2/authorize?client_id=588450296955535389&scope=bot&permissions=1345715264)**`, true)
    .addField(`Bot information`, stripIndents`
    Discord.js version: **12.0.1**
    Node.js version: **12.x**
    Created at: **6/12/2019**
    Commands: **35**`, true)

    .setFooter(useruser, userurl)
    .setTimestamp()

    message.channel.send(mana)


}
 }
