const { RichEmbed } = require('discord.js');

module.exports = {
  name: "status",
  category: "developer",
  description: "Set a new status for bot",
  usage: "[status]",
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
    
    let mana = new RichEmbed()
    .setDescription("<a:Verify:708749864191655937> Status was successfully updated!")
    .setColor("#576bff")
    .setFooter("Request from: " + message.author.username, message.author.avatarURL)
    .setTimestamp();
    
    message.channel.send(mana)

    if(args[0] == "online") return client.user.setStatus("online"); 

    if(args[0] == "invisible") return client.user.setStatus("invisible");

    if(args[0] == "dnd") return client.user.setStatus("dnd");

    if(args[0] == "idle") return client.user.setStatus("idle");

  }
}
