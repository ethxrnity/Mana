const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "poll",
  aliases: ["question"],
  category: "moderation",
  description: "Nothing to explain",
  run: async (client, message, args) => {

const member = getMember(message, args.join(" "));
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":no_entry_sign: You dont have enough permissions to do this!")


if (!args[0]) return message.channel.send('<:__:714072967499350016> Write the question you want people to vote for!');


const mana = new RichEmbed()
    .setColor("#576bff")
    .setThumbnail(member.user.displayAvatarURL)
    .addField(`**Submitter**`, stripIndents`${message.author.username}`)
    .addField(`**Question**`, stripIndents`${args.join(' ')}`)

    .setTimestamp()

let msg = await message.channel.send(mana)
    .then(function (msg) {
        msg.react("714074123617173546");
        msg.react("714074136053415956");
        message.delete({timeout: 1000});
        }).catch(function(error) {
        console.log(error);
    });
}
}
