const { Client, RichEmbed, Collection } = require("discord.js");

const client = new Client({
  disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();   

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);

});
client.on("ready", () => {
    console.log("Im online you freaking weeb! UwU");

    client.user.setPresence({
        status: "online",
        game: {
            name: "m!help",
            type: "WATCHING"
        }
    });
});

client.on("message", async message => {
    const prefix = "m!";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    console.log(command)

    if (command)
        command.run(client, message, args);

});

client.login("NTg4NDUwMjk2OTU1NTM1Mzg5.XsLqhA.aAlR0eP4iBdiL08VM4dRku6yR14");
