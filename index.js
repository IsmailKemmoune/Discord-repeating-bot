const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('connected as ' + client.user.tag);

    client.user.setActivity("", {type: "WATCHING"});
})

client.on("message", message => {
    if (message.author.bot) return 
    message.channel.send(`${message.content}`);
});

// client.on('message', (message) => {
//     console.log(message.author.presence)
// })
client.login('Nzc2Nzg1MDQ0Mjk5MzE3MjY4.X657cg.5Zpol3fAIK9JkbnNqwUJgdL3j0A');