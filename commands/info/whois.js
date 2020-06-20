const { getMember, formatDate } = require("../../functions.js");
const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
  name: "whois",
  aliases: ["userinfo", "user", "who"],
  category: "info",
  description: "Returns user information",
  usage: "[username | id | mention]",
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

const joined = formatDate(member.joinedAt);
const roles = member.roles
    .filter(r => r.id !== message.guild.id)
    .map(r => r)
    .join(", ") || "none";

const created = formatDate(member.user.createdAt);

const mana = new RichEmbed()
    .setFooter("Request from: " + message.author.username, member.user.displayAvatarURL)
    .setThumbnail(member.user.displayAvatarURL)
    .setColor("#576bff")

    .addField(`Member information`, stripIndents`**Display name:** ${member.displayName}
    **Joined at:** ${joined}
    **Roles:** ${roles}`, true)

    .addField(`User information`, stripIndents`**ID:** ${member.user.id}
    **Username:** ${member.user.username}
    **Discord Tag:** ${member.user.tag}
    **Created at:** ${created}`, true)

    .setTimestamp()

if (member.user.presence.game)
   mana.addField(`Currently playing`, `**Name:** ${member.user.presence.game.name}`);

message.channel.send(mana);


  }
}
