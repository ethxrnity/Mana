const { RichEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "dog",
  category: "fun",
  description: "Returns a cute doggo",
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

let{body} = await superagent
.get(`https://random.dog/woof.json`);

let mana = new RichEmbed()
.setColor("#576bff")
.setFooter("Request from: " + message.author.username, message.author.avatarURL)
.setImage(body.url)
.setTimestamp();

message.channel.send(mana);
  }


}
