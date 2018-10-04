const Discord = require('discord.js');
var bot = new Discord.Client();
const Prefijo = 'j!';

var BOMB = [
    '+1 Kill.',
    'Tu cuenta ha sido suspendida.'
];
    

var fortunas = [
    'Sí',
    'No',
    'Tal vez',
    'No c',
    'Realmente no quiero responder eso :3'
];

var jeff = [
    'Aquí te envio una foto super secsi de jeff para que no te sientas solo :) https://cdn.discordapp.com/attachments/435174664864530456/445745484938608651/20180421_202431.jpg',
    'Aquí te envio una foto super secsi de jeff para que no te sientas solo :) https://cdn.discordapp.com/attachments/435174664864530456/445745484938608654/Screenshot_20180514-180640.png',
    'Aquí te envio una foto super secsi de jeff para que no te sientas solo :) https://cdn.discordapp.com/attachments/435174664864530456/458732317305733131/20180616_200206.jpg',
    'Aquí te envio una foto super secsi de jeff para que no te sientas solo :) https://cdn.discordapp.com/attachments/435174664864530456/458732317305733130/Screenshot_20180616-200519.png',
    'Aquí te envio una foto super secsi de jeff para que no te sientas solo :) https://cdn.discordapp.com/attachments/435174664864530456/458732316676718633/Screenshot_20180616-200301.png',
    'Aquí te envio una foto super secsi de jeff para que no te sientas solo :) https://cdn.discordapp.com/attachments/435174664864530456/458732316676718632/Screenshot_20180616-200245.png',
    'Aquí te envio una foto super secsi de jeff para que no te sientas solo :) https://cdn.discordapp.com/attachments/435174664864530456/458732316051898389/Screenshot_20180616-200624.png',
    'Aquí te envio una foto super secsi de jeff para que no te sientas solo :) https://cdn.discordapp.com/attachments/435174664864530456/458732316051898388/Screenshot_20180616-200229.png',
    'Aquí te envio una foto super secsi de jeff para que no te sientas solo :) https://cdn.discordapp.com/attachments/435174664864530456/458732315443462165/IMG-20180616-WA0007.jpg',
    'Aquí te envio una foto super secsi de jeff para que no te sientas solo :) https://cdn.discordapp.com/attachments/435174664864530456/458732315443462164/Screenshot_20180616-200439.png',
    'Haber pendejo estoy muy ocupado como para estar respondiendo tus mamadas asi que dejas de estar chingando o me violo a tu madre lmao asi que ya aprendizte ademas si se que soy un robot pero no para que me esten chingando a  si y de estar chingando mejor me voy a comer mi ganzito marinela xd asi que avisado we o llamo al pronco para que te moche el pito kabron jaja salu2. Con cariño, Jeffrey Bot :v'
];

var momo = [
    'Bad momo prro',
    'K asko de momo men',
    'T mamaste con tu momo prron',
    'JAJA C MAMO EL VATO WE +1000 PRRO',
    '-100000000 prro',
    '+9999999999999999999999 PRRO',
    'Me rio para que no estes solo jaja -100 prro'
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
      /* Octubre sin PacMan */

    var filtered = [":v", ":u", ".u", ".v", ":'v", ':"v', ".'v'", '."v', ":'u", ':"u', "v:", "u:", ":,v", ":,u", 'v":":', ":y", "y:", ":V", ":U", ";V", ";v", ";U", ";u", ":∨", "∨:", ";∨", "∨;", ":ʌ", "ʌ:", ";ʌ", "ʌ;"];
    for (var filter of filtered) {
        if (message.content.indexOf(filter) !== -1) {
            message.delete();
            return message.reply("Octubre sin Pac-Man.");
        }
    }
    
    // BOMB @MAS
    if (message.content == "BOMB @MAS"){
        message.channel.send(BOMB[Math.floor(Math.random()* BOMB.length)]);
    };
    
    if (message.content == "Bomb @MAS"){
        message.channel.send(BOMB[Math.floor(Math.random()* BOMB.length)]);
    };
    
    if (message.content == "Bomb @Mas"){
        message.channel.send(BOMB[Math.floor(Math.random()* BOMB.length)]);
    };
    
    if (message.content == "bomb @mas"){
        message.channel.send(BOMB[Math.floor(Math.random()* BOMB.length)]);
    };
    
    // Comando !give error
    if (message.content == "!give"){
        message.author.send("Estaría shido que eligieras un color crack ;-;");
    };
    
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
    // Jeff
    // mi cara deformada.jpg https://cdn.discordapp.com/attachments/435174664864530456/445745484938608651/20180421_202431.jpg
    // mi papada toda sensual.jpg https://cdn.discordapp.com/attachments/435174664864530456/445745484938608654/Screenshot_20180514-180640.png
    
    if (message.content == "jeff"){
        message.channel.send(jeff[Math.floor(Math.random()* jeff.length)]);
    };
    
    if (message.content == "Jeff"){
        message.channel.send(jeff[Math.floor(Math.random()* jeff.length)]);
    };
    
    if (message.content == "JEFF"){
        message.channel.send(jeff[Math.floor(Math.random()* jeff.length)]);
    };
    
    // GDM
    // https://media.discordapp.net/attachments/435174664864530456/446344038732529675/JPEG_20180514_212825.jpg?width=624&height=468
    
    if (message.content == "gdm"){
        message.channel.send("Aquí te envio una foto super secsi de GDM para que no te sientas solo :) " + "https://media.discordapp.net/attachments/435174664864530456/446344038732529675/JPEG_20180514_212825.jpg?width=624&height=468");
    };
    
    if (message.content == "Gdm"){
        message.channel.send("Aquí te envio una foto super secsi de GDM para que no te sientas solo :) " + "https://media.discordapp.net/attachments/435174664864530456/446344038732529675/JPEG_20180514_212825.jpg?width=624&height=468");
    };
    
    if (message.content == "GDM"){
        message.channel.send("Aquí te envio una foto super secsi de GDM para que no te sientas solo :) " + "https://media.discordapp.net/attachments/435174664864530456/446344038732529675/JPEG_20180514_212825.jpg?width=624&height=468");
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
           .addField("j!encuesta", "Has una encuesta con este comando, las personas podrán votar.")
           .addField("j!novedades", "Que hay de nuevo en mi última actualización?")
           .addField("j!links", "Envía un mensaje con los links de redes sociales y del server.")
           .addField("j!momo", "Envía una respuesta al azar para decir que tan bueno o malo fue el momo del men.")
           .addField("?prefijo", "Te dice el prefijo para citar comandos.")
           .addField("j!ayuda", "Te muestra este mensaje.")
           .setColor(0x00ff15)
           .setFooter("Versión 2.8 de ayuda.")
           .setThumbnail(message.author.avatarURL)

           message.author.send(embed);
           message.channel.send("Mensaje enviado de forma privada!");
           break;

        case "info":
            message.channel.send("*Versión de JeffreyBot: 2.8.0*")
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
            message.channel.send("En la versión 2.9.0")
            message.channel.send("DEP Cuenta principal...")
            message.channel.send("Nuevo link! (j!links)")
            break;
            
        case "momo":
            message.channel.send(momo[Math.floor(Math.random()* momo.length)]);
            break;
            
        case "dep":
            message.channel.send("DEP Cuenta principal ;(");
            break;
            
        case "links":
        var embed = new Discord.RichEmbed()
        .addField("YouTube de Jeffrey", "https://www.youtube.com/c/JeffreyG", true)
        .addField("Twitter de Jeffrey", "https://www.twitter.com/_JeffreyG_", true)
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
