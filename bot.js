const Discord = require('discord.js');
var bot = new Discord.Client();
const Prefijo = 'j!';

bot.on('ready', () => {
    bot.user.setStatus('invisible');
  })

bot.on('message', function(message) {
    if(message.content.startsWith(Prefijo)){
        message.reply(`Esta versión de JeffreyBot es obsoleta. Un nuevo ya está disponible.`)
    }
})
    
bot.login(process.env.Token);
