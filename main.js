require('dotenv').config();

const Discord = require('discord.js');
const axios = require('axios');
const { set } = require('mongoose');
const client = new Discord.Client();
const prefix ='-';

//fs for acessing other js files
const fs = require('fs');

//discord collection of all commands
client.commands = new Discord.Collection();

//make sure that we're reading js files
const commandFiles = fs.readdirSync('./commands/').filter(file =>file.endsWith('.js'));

//loop tofind correct command to execute
for(const file of commandFiles){

    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


client.once('ready',()=>{
    console.log('CoWIBot Is Online !');
})



client.on('message',message=>{
    //checks if the message not contain prefix or author is bot, condition true =>no action done
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    //slices the command
    const args =message.content.slice(prefix.length).split(/ +/);
    const command=args.shift().toLowerCase();

    
    // try {
	// 	client.commands.get(command).execute(message, args);
	// } catch (error) {
	// 	console.error(error);
	// 	message.reply('there was an error trying to execute that command!');
	// }

    if(command === 'ping'){

        client.commands.get('ping').execute(message, args);

    }else if(command == 'link'){

        client.commands.get('link').execute(message,args);

    }else if (command == 'help'){

        client.commands.get('help').execute(message,args);
    }
    else if (command == 'register'){

        client.commands.get('register').execute(message,args);
    }







});

client.login(process.env.BOTTOKEN);