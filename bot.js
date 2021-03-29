const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?" // change this with your prefix
const Token = "tokenhere"; // Replace token with the token you copied (dont remove the parentheses)

client.once('ready', () => {
  console.log(`Bot is now online!`)  
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "sayhi") { // change sayhi to your command!
    message.channel.send('Hello!') // change hello to what you want the bot to say
    // message.channel.send sends a message inthe channel. It would say "Hello!" here.
  } else if (command === "reply") { // change reply to your command!
    message.reply('Works!') // change it works to what you want the bot to say
// message.reply sends a message and pings the user. It would say "@User, it works!" here.
  } else if (command === "say") {
    message.channel.send(`${args}`) // this will send the users arguments (text after the command)
  }// to add more commands put another else if (message.content) {}
});
client.login(Token)
