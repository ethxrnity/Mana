const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Will kick users that you don't want",
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

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":no_entry_sign: You dont have enough permissions to do this!")

let logs = message.guild.channels.find("name", "logs");
if(!logs) return message.channel.send("I didn't find channel named ``logs`` please create it!");

let user = message.mentions.users.first();
if(!user) return message.reply("Please mention user who you want to kick first!");

let kReason = args.join(" ").slice(22);
if(!kReason) kReason = "The reason was not given";

message.guild.member(user).kick(kReason);

let mana = new RichEmbed()
.setTitle("User was kicked!")
.setFooter("Kicked by: " + message.author.username, message.author.avatarURL)
.setThumbnail(member.user.displayAvatarURL)
.setColor("#576bff")
.setTimestamp()
.addField("Kicked user:", `${user}`)
.addField("Reason:", kReason)
.addField("Admin:", `${message.author}`)

const esayMessage = args.join(" ");
             message.delete().catch(O_o=>{});

logs.send(mana);
}
}
