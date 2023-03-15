require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is ready to roll!`);
});

client.on('messageCreate', (message) => {

    if (message.author.bot) {
        return;
    }
    else if (message.content === '/hi') {
        message.reply('Hey!');
    }
    else if (message.content === '/thanks', ["mention"]) {
        let sender = message.author.username;
        let recipient = message.mentions.users.filter((user) => user.bot === false).last();
        let responses = [
            `${recipient} got kudos from ${sender} 🎉`,
            `${sender} thinks ${recipient} is awesome! ✨`,
            `Hey ${recipient}! ${sender} appreciates you! 😍`,
            `Hey ${recipient}! ${sender} thinks you rule! 👑`,
          ];
        let response = responses[Math.floor(Math.random() * responses.length)];
        message.reply(response);
    }
    else if (message.content === '/I love the DevBot') {
        message.react('❤');
    }
});

client.login(process.env.Discord_Bot_Token);