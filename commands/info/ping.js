const { RichEmbed } = require('discord.js');

module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
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
       .setDescription(`:ping_pong: Pong! **\`${client.pings[0]}ms\`**`)
       .setFooter(useruser, userurl)
       .setTimestamp()

       message.channel.send(mana)


}
    }
