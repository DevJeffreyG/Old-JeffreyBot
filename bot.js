const Discord = require('discord.js');
var bot = new Discord.Client();
const Prefijo = 'j!';

bot.on('ready', () => {
    bot.user.setStatus('invisible');
  })

bot.on('message', function(message) {
    if(message.content.startsWith(Prefijo)){
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle(`Ups!`, message.author.displayAvatarURL)
        .setDescription(`Esta versión de JeffreyBot es obsoleta. Uno nuevo ya está disponible.`)
        .setColor("RED")
        return message.channel.send(embed).then(msg => msg.delete(7000));
    }
})
    
bot.login(process.env.Token);
