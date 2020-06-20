const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "purge",
  category: "moderation",
  aliases: ["clear"],
  description: "Your message will be send by Ellen",
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

  if (isNaN(args[0]) || parseInt(args[0]) <= 0) return message.reply("Thats not a valid number.")

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry i cant delete message. Give me permissions to do it please!")

  let deleteAmount;

  if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
  } else {
      deleteAmount = parseInt(args[0]);
  }

  message.channel.bulkDelete(args[0])
           var mana = new RichEmbed()

           .setDescription(`Successfully deleted **${args[0]}** unnecessary messages!`)
           .setFooter('Request from: ' + message.author.username, message.author.avatarURL)
           .setColor('#576bff')

           .setTimestamp();
           message.channel.send(mana);


}
}
