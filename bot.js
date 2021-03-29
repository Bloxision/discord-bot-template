const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";
const Token = "tokenhere"; 

client.once('ready', () => {
    console.log(`Bot is now online!`)  
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "sayhi") {
        message.channel.send('Hello!')
    } else if (command === "reply") { 
        message.reply('Works!')
    } else if (command === "say") {
        message.channel.send(`${args}`)
    }
});
client.login(Token)
