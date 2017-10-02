const Discord = require("discord.js");
const client = new Discord.Client({
    disableEveryone: true
});
const token = ("")

client.login(token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}`);
});