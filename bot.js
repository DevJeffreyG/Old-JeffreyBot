const Discord = require('discord.js');
var bot = new Discord.Client();
const Prefijo = 'j!';

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
    // Ded
    if (message.content == "ira pues"){
        message.channel.send("dijo el ded xDxDxdXdxdxDxDD");
    };
    
    if (message.content == "Ira pues"){
        message.channel.send("dijo el ded xDxDxdXdxdxDxDD");
    };
    
    // Comando !give error
    if (message.content == "!give 1"){
        message.author.send("Hey! El comando no es así!, el comando es incluyendo el guión **-**.");
    };
    
    if (message.content == "!give 2"){
        message.author.send("Hey! El comando no es así!, el comando es incluyendo el guión **-**.");
    };
    
    if (message.content == "!give 3"){
        message.author.send("Hey! El comando no es así!, el comando es incluyendo el guión **-**.");
    };
    
    if (message.content == "!give 4"){
        message.author.send("Hey! El comando no es así!, el comando es incluyendo el guión **-**.");
    };
    
    if (message.content == "!give 5"){
        message.author.send("Hey! El comando no es así!, el comando es incluyendo el guión **-**.");
    };
    
    if (message.content == "!give 6"){
        message.author.send("Hey! El comando no es así!, el comando es incluyendo el guión **-**.");
    };
    
    if (message.content == "!give 7"){
        message.author.send("Hey! El comando no es así!, el comando es incluyendo el guión **-**.");
    };
    
    if (message.content == "!give 8"){
        message.author.send("Hey! El comando no es así!, el comando es incluyendo el guión **-**.");
    };
    
    if (message.content == "!give 9"){
        message.author.send("Hey! El comando no es así!, el comando es incluyendo el guión **-**.");
    };
    
    if (message.content == "!give 10"){
        message.author.send("Hey! El comando no es así!, el comando es incluyendo el guión **-**.");
    };
    
    // Offtopic
    if (message.content == "hola"){
        message.channel.send("Adiós.");
    };
    
    if (message.content == "jajaja"){
        message.channel.send("c mamo");
    };
    
    if (message.content == "ok"){
        message.channel.send("A ok*");
    };
    
    if (message.content == "oc"){
        message.channel.send("A oc*");
    };
    
    if (message.content == "okc"){
        message.channel.send("Porque te copias de yefrigemede >:v");
    };
    
    if (message.content == "Hey"){
        message.channel.send("Bye.");
    };

    if (!message.content.startsWith(Prefijo)) return;
    var args = message.content.substring(Prefijo.length).split(/ +/);

    switch(args[0].toLowerCase()) {
    //  C+V
        case "ayuda":
           var embed = new Discord.RichEmbed()
           .addField("j!pregunta", "Pregúntame cualquier cosa y yo te responderé con sinceridad! Con respuestas de: Sí, No, Tal vez...")
           .addField("j!info", "Te dice mi versión (Jeffrey Bot)")
           .addField("j!llego", "Hago saber que tú estas conectado.")
           .addField("j!novedades", "Que hay de nuevo en mi última actualización?")
           .addField("j!links", "Envía un mensaje con los links de redes sociales y del server.")
           .addField("?prefijo", "Te dice el prefijo para citar comandos.")
           .addField("j!ayuda", "Te muestra este mensaje.")
           .setColor(0x00ff15)
           .setFooter("Versión 1.3 de ayuda.")
           .setThumbnail(message.author.avatarURL)

           message.author.send(embed);
           message.channel.send("Mensaje enviado de forma privada!");
           break;

        case "info":
            message.channel.send("*Versión de JeffreyBot: 2.5.0*")
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
            message.channel.send("En la versión 2.5.0")
            message.channel.send("Tiene muchas respuestas entre ellas: 'ok = A ok' , 'oc = A oc' y se incluye el md informativo del comando !give *es un comando del servidor de discord de JeffreyGMD.*")
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
        
        case "encuesta":
            if (args[1]) {
                message.react("👍")
                .then(message.react("👎"))
                .then(message.react("🖕"));
            }
            
        else message.channel.send("Escribe tu encuesta! :/")
            break;
        
        default:
            message.channel.send("Comando no existente!");
            break;
    }
});
bot.login(process.env.Token);
