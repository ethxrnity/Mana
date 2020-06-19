const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
  name: "8ball",
  aliases: ["ball", "question"],
  category: "fun",
  description: "Returns answer for your question",

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
  
if(!args[2]) return message.reply("Ask the whole question!");
            let replies = ["Yes", "No", "Ask again", "Maybe"]

            let results = Math.floor((Math.random() * replies.length));
            let question = args.slice(0).join(" ");

            let mana = new RichEmbed()
            .setThumbnail("https://i.ya-webdesign.com/images/8-ball-png-1.png")
            .addField("Question", question)
            .addField("Answer:", replies[results])
            .setColor("#576bff")
            .setFooter("Request from: " + message.author.username, message.author.avatarURL);

            message.channel.send(mana);

        }
}
