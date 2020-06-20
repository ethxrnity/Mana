const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");

const VERIFIED = "721123061679521802";

module.exports = {
  name: "verify",
  category: "moderation",
  description: "You will be verified on Ethx's Lab. server!",
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


message.member.addRole(VERIFIED);


             const sayMessage = args.join(" ");

             let mana = new RichEmbed()
             .setColor("#576bff")
             .setDescription ("<a:Verify:708749864191655937> User was successfully verified")
             .setFooter("Request from: " + message.author.username, message.author.avatarURL)
             .setTimestamp();

             const esayMessage = args.join(" ");
             message.delete().catch(O_o=>{});

             message.channel.send(mana)
    .then(m => m.delete(3000));
}
}
