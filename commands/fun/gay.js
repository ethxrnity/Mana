const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "gay",
  category: "fun",
  description: "Returns how much gay you are",
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

let gay = Math.round(Math.random() * 100);

let mana = new RichEmbed()
    .setColor("#576bff")
    .setDescription(`I think that ${member.user.username} is ${gay}% gay!`)
    .setFooter("Request from: " + message.author.username, message.author.avatarURL)
    .setTimestamp();
message.delete(10);

return message.channel.send(mana);
}

}
