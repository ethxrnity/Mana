const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "serverinfo",
  aliases: ["server"],
  category: "info",
  description: "Returns information about server",

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

let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let sicon = message.guild.iconURL;
    const useruser = "Request from: " + message.author.username;
    const userurl = message.author.avatarURL;
    let mana = new RichEmbed()
    .setAuthor(message.guild.name, sicon)
    .setColor("#576bff")
    .setThumbnail(sicon)
    .addField(`Server information`, stripIndents`**Server name**: ${message.guild.name}
    **Owner**: ${message.guild.owner.user.tag}
    **Roles**: ${message.guild.roles.size}
    **Channels**: ${message.guild.channels.size}`, true)
    .addField(`User information`, stripIndents`**Users**: ${message.guild.memberCount}
    **Bots**: ${message.guild.members.filter(m => m.user.bot).size}
    **Online**: ${online.size}`, true)

    .setFooter(useruser, userurl)
    .setTimestamp()

    message.channel.send(mana)


    }
    }
