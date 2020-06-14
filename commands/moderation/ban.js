const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Will ban users that you don't want",
  run: async (client, message, args) => {
           const member = getMember(message, args.join(" "));
           const msg = await message.channel.send(`:gear: Working on your request...`).then(m => m.delete(100));

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":no_entry_sign: You dont have enough permissions to do this!")

let logs = message.guild.channels.find("name", "logs");
if(!logs) return message.channel.send("I didn't find channel named ``logs`` please create it!");

let user = message.mentions.users.first();
if(!user) return message.reply("Please mention user who you want to ban first!");

let kReason = args.join(" ").slice(22);
if(!kReason) kReason = "The reason was not given";

message.guild.member(user).ban(kReason);

let logsEmbed = new RichEmbed()
.setTitle("User was banned!")
.setFooter("Banned by: " + message.author.username, message.author.avatarURL)
.setThumbnail(member.user.displayAvatarURL)
.setColor("#576bff")
.setTimestamp()
.addField("Banned user:", `${user}`)
.addField("Reason:", kReason)
.addField("Admin:", `${message.author}`)

logs.send(logsEmbed);
}
}
