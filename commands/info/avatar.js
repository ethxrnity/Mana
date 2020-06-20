const { RichEmbed } = require('discord.js');

module.exports = {
  name: "avatar",
  category: "info",
  description: "Return users avatar",
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

let user = message.mentions.users.first() || message.author;

            let mana = new RichEmbed()
            .setImage(user.displayAvatarURL)
            .setColor("#576bff")
            .setTimestamp()
            .setFooter("Request from: " + message.author.username, message.author.avatarURL);


            message.channel.send(mana)
  }
}
