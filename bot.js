const Discord = require('discord.js');
var bot = new Discord.Client();
const Prefijo = 'j!';

bot.on('ready', () => {
    bot.user.setStatus('invisible');
  })

bot.on('message', function(message) {
    if(message.content.startsWith(Prefijo)){
        let embed = new Discord.RichEmbed()
        .setTitle(`Ups!`)
        .setDescription(`Esta versión de JeffreyBot es obsoleta. Un nuevo ya está disponible.`)
        .setFooter(` `, message.author.displayAvatarURL);
        return message.channel.send(embed).then(msg => msg.delete(7000));
    }
})
    
bot.login(process.env.Token);
