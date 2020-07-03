const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "addbot",
  category: "developer",
  description: "Will add your bot tu queue!",

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

let logs = message.guild.channels.find("name", "logs")
if(!logs) return message.channel.send("I didnt find channel named ``logs`` please create it!");

    if(message.guild.id !== "607710011157905419") return message.channel.send({embed: {
  color: 5729279,
  description: "<a:denied_block:709642175868043344> Sorry, this command is for Ethx's Lab. server only!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }

}});

     if(message.channel.id !== "728643994287866006") return message.channel.send({embed: {
  color: 5729279,
  description: "<a:denied_block:709642175868043344> Sorry, this command can not be used here!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }

}});

let invite = args[0];
    if(!invite) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:BootyShake:725465988728094822> Please send an invitation of yours bot!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
}});

let prefix = args[1];
    if(!invite) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:BootyShake:725465988728094822> Please send a prefix of yours bot!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
}});

let manalog = new RichEmbed()
.setTitle("A new bot have been added!")
.setFooter("Request from: " + message.author.username, message.author.avatarURL)
.setThumbnail(member.user.displayAvatarURL)
.setColor("#576bff")
.setTimestamp()
.addField("Bots invite:", `**[LINK](${invite})**`)
.addField("Bots prefix:", `${prefix}`)
.addField("Added by:", `${message.author}`)

logs.send(manalog);


let mana = new RichEmbed()
.setColor("#576bff")
.setTimestamp()
.setFooter("Request from: " + message.author.username, message.author.avatarURL)
.setDescription("<a:Verify:708749864191655937> Bot was successfully added to queue!")

message.channel.send(mana);

}
}
