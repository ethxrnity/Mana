const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
  name: "8ball",
  aliases: ["ball", "question"],
  category: "info",
  description: "Returns answer for your question",

run: async (client, message, args) => {
  const msg = await message.channel.send(`:gear: Working on your request...`).then(m => m.delete(100));
if(!args[2]) return message.reply("Ask the whole question!");
            let replies = ["Yes", "No", "Ask again", "Maybe"]

            let results = Math.floor((Math.random() * replies.length));
            let question = args.slice(0).join(" ");

            let ballembed = new RichEmbed()
            .setThumbnail("https://i.ya-webdesign.com/images/8-ball-png-1.png")
            .addField("Question", question)
            .addField("Answer:", replies[results])
            .setColor("#576bff")
            .setFooter("Request from: " + message.author.username, message.author.avatarURL);

            message.channel.send(ballembed);

        }
}
