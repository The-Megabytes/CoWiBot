require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();
const prefix ='-';

client.once('ready',()=>{
    console.log('CoWIBot Is Online !');
})

client.on('message',message=>{
    //checks if the message not contain prefix or author is bot, condition true =>no action done
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    //slices the command
    const args =message.content.slice(prefix.length).split(/ +/);
    const command=args.shift().toLowerCase();


    if(command === 'ping'){
        message.channel.send('pong!');

    }else if(command == 'login'){
        message.channel.send('https://selfregistration.cowin.gov.in/')
    }




})



client.login(process.env.BOTTOKEN);