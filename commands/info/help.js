const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
  name: "help",
  aliases: ["?", "commands"],
  category: "info",
  description: "Returns bot help",
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

let manaDM = new RichEmbed()
    .setColor("#576bff")
    .setThumbnail(client.user.avatarURL)
    .setTitle("<a:potvrdit:696470746553253949> Help for Mana!")
    .setDescription("Mana has prefix set on: m! \n Support server: **[INVITE](https://discord.gg/XAxGtXA)** \n Mana invite: **[LINK](https://discord.com/oauth2/authorize?client_id=588450296955535389&scope=bot&permissions=1345715264)**\n<a:Facts:722462826366763128> Total commands: **26** \n\n <:Bug:722199787117477911> If any problem, bug, power cut or new idea occurs, contact the Developer: <@574849327650963469> or join our **[Support Server](https://discord.gg/XAxGtXA)**.\n")

    .addField(`**<a:Pew_Pew:722189704010661918> Fun commands**`, stripIndents`**8ball**: Ask her your question and she will answer Yes, No or Maybe.
    **Meme**: Will send you a spicy meme.
    **Gay**: Determine what percentage of gay you are.
    **Dog**: Will send you a cute doggo.
    **Cat**: Will send you a cute kitten.`, true)

    .addField(`**<a:doghammer:722370017085358121> Moderation commands**`, stripIndents`**Ban**: Will ban particular user from your server.
    **Kick**: Will kick particular user from your server.
    **Purge**: Deletes all unnecessary messages with a limit of 1 to 100.
    **Say**: It will give you the right to speak like a BOT.
    **Poll**: Creates a poll where you can vote for Yes or No.
    **Verify**: Will give member role on our **[Support Server](https://discord.gg/XAxGtXA)**.`, true)

    .addBlankField()

    .addField(`**<:navi:722375496603533412> Info commands**`, stripIndents`
    **Info**: Will send you a detailed description about bot and links.
    **Ping**: Will send you bots ping.
    **Server**: Will send you a detailed description about server.
    **User**: Will send you a detailed description about mentioned user.
    **Avatar**: Will send you mentioned users avatar.
    `, true)

    .addField(`**<:verifieddev:713858469836488724> Developer commands**`, stripIndents`
    **Serverlist**: Will show you on how many servers Mana is.
    **Status**: Will give you the right to change bots status.
    **Blacklist**: No need to explain.
    `, true)

    .addBlankField()

    .addField(`**<a:FuckWeird:722460218247610419> Anime commands**`, stripIndents`
    **Kiss**: Will send you anime kiss gif.
    **Pat**: Will send you anime pat gif.
    **Hug**: Will send you anime hug gif.
    **Slap**: Will send you anime slap gif.
    **Neko**: Will send you anime neko gif.
    `, true);

let mana = new RichEmbed()
    .setTitle("Help list sent successfully!")
    .setColor("#576bff")
    .setDescription("<:Boxman:722383410278170634>  | I have sent you something to your PM!")

message.channel.send(mana);
message.author.send(manaDM);

}
}
