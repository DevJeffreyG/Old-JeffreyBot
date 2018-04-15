const Discord = require('discord.js');
var bot = new Discord.Client();
const Prefijo = 'j!'
const Token = 'NDMxOTczMzQwMjE2MDMzMjkw.DbUfaQ.m4r6cseee2dbbriifes6K1MKkRw';

var fortunas = [
    'Sí',
    'No',
    'Tal vez',
    'No c',
    'Realmente no quiero responder eso :3'
];

bot.on('ready', function(listo) {
    console.log("Listo!");
});

bot.on('ready', () => {
    bot.user.setActivity('Di j!ayuda');
  })



bot.on('message', function(message) {
    console.log(message.content);
    if (message.content == "?prefijo"){
        message.channel.send("El prefijo es " + Prefijo);
    };

    if (!message.content.startsWith(Prefijo)) return;
    var args = message.content.substring(Prefijo.length).split(" ");

    switch(args[0].toLowerCase()) {
    //  C+V
        case "ayuda":
           var embed = new Discord.RichEmbed()
           .addField("j!pregunta", "Pregúntame cualquier cosa y yo te responderé con sinceridad! Con respuestas de: Sí, No, Tal vez...")
           .addField("j!info", "Te dice mi versión (Jeffrey Bot)")
           .addField("j!llego", "Hago saber que tú estas conectado.")
           .addField("j!links", "Envía un mensaje con los links de redes sociales y del server.")
           .addField("?prefijo", "Te dice el prefijo para citar comandos.")
           .addField("j!ayuda", "Te muestra este mensaje.")
           .setColor(0x00ff15)
           .setFooter("Versión 1.2 de ayuda.")
           .setThumbnail(message.author.avatarURL)

           message.author.send(embed);
           message.channel.send("Mensaje enviado de forma privada!");
           break;

        case "info":
            message.channel.send("*Versión de JeffreyBot: 2.0.0*")
            break;

        case "llego":
            message.channel.send(message.author.toString() + " Ha llegado prros!")
            break;

        case "bola8":
            message.channel.send("Algo ha ido mal, " + message.author.toString() + " " + "¡Ese comando ya no existe!" + " Ahora es j!pregunta");
            break;
        
        case "pregunta":
            if (args[1]) message.channel.send(message.author.toString() + " " + "La respuesta a tu pregunta es: " + fortunas[Math.floor(Math.random()* fortunas.length)]);
            else message.channel.send("No pude leer eso ;-;");
            break;
        
        case "novedades":
            message.channel.send("En la versión 2.0.0 ahora el bot es 24/7")
            message.channel.send("Ahora el bot podrá ser usado las 24 horas del día.")
            break;
            
        case "reglas":
        var embed = new Discord.RichEmbed()
        .addBlankField("**REGLAS**")
        .addBlankField("1. Actuar con *sentido común*.")
        .addBlankField("2. Respetar a **todos** en el server.")
        .addBlankField("3. __**Tienes prohibido**__:")
        .addBlankField("➤ Hacer **Spam/Flood** en los canales de chat *[ Permitido en #▸offtopic ]*", "El spam tipo enviar URL no es admitido.")
        .addBlankField("➤ Tener una actitud que pueda molestar a los demás del servidor.")
        .addBlankField("➤ Hacer **spoilers**. ***De cualquier tipo***")
        .addBlankField("➤ Utilizar los canales de manera incorrecta.")
        .addBlankField("➤ Escribir palabrotas. ( se permite *alv* y *lpm* [ La acortación ])")
        .addBlankField("➤ Excesivas menciones (@)")
        .addBlankField("➤ *[ Permitido en #▸offtopic ]*")
        .addBlankField("➤ Abusar de emojis.")
        .addBlankField("➤ Escribir mucho en Mayúsculas.", "Ejempo: HOLA A TODOS COMO ESTAN?!")
        .addBlankField("➤ Poner Gmi2 o música sobre-explotada que pueda molestar a otros usuarios.")
        .addBlankField("➤ Pedir cualquier rango, ya sea en Discord o en GDPS", "Si pides por mensaje privado serás bloquedo.")
        .addBlankField("➤ Usar links, a menos que seas moderador del Discord. Hazlo en privado.")
        .addBlankField("➤ Enviar invitaciones a cualquier otro server diferente a GDPS JeffreyGMD. Hazlo en privado.")
        .addBlankField("4. Leer todos los mensajes anclados de los canales de chat.")
        .addBlankField("**EXTRA**")
        .addBlankField("➤ Si necesitas ayuda con algo, pregúntalo en #《☏》ayuda-support")
        .setFooter("Las reglas pueden cambiar")
        .setColor(0x00ff15)
        .setThumbnail(message.author.avatarURL)

            message.channel.send(embed);
            break;

        case "links":
        var embed = new Discord.RichEmbed()
        .addField("YouTube de Jeffrey", "https://www.youtube.com/channel/UCCYiF7GGja7iJgsc4LN0oHw", true)
        .addField("Twitter de Jeffrey", "https://www.twitter.com/JeffreyGMD", true)
        .addField("Página del server", "https://gmdsjeff.000webhostapp.com/")
        .setColor(0x00ff15)
        .setFooter("Versión 1.0 de links")
        .setThumbnail(message.author.avatarURL)
            message.channel.send(embed);
            break;

        default:
            message.channel.send("Comando no existente!");
            break;
    }
});
bot.login(process.env.Token);
