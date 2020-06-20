const { RichEmbed } = require('discord.js');

module.exports = {
  name: "serverlist",
  aliases: ["list"],
  category: "developer",
  description: "Returns list of servers where Mana is",
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

if(message.author.id !== "574849327650963469") return message.channel.send({embed: {
  color: 5729279,
  description: "<a:denied_block:709642175868043344> Sorry, this command is for developers only!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
}});

let bicon = client.user.displayAvatarURL;
    let string = '';
    client.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = client.user.username;
    let mana = new RichEmbed()
        .setColor("#576bff")
        .addField("Listing of all servers where Mana is ", string)
        .setTimestamp()
        .setFooter("Request from: " + message.author.username, message.author.avatarURL);
    message.channel.send(mana);
}
}
