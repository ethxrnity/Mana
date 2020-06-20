const { RichEmbed } = require('discord.js');

module.exports = {
  name: "say",
  category: "moderation",
  description: "Your message will be send by Mana",
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

           if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":no_entry_sign: You dont have enough permissions to do this!")

             const sayMessage = args.join(" ");

             let mana = new RichEmbed()
             .setColor("#576bff")
             .setDescription (`${sayMessage}`)
             .setFooter("Written by: " + message.author.username, message.author.avatarURL)
             .setTimestamp();

             const esayMessage = args.join(" ");
             message.delete().catch(O_o=>{});

             message.channel.send(mana)
}
}
