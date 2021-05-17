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

var districtsKerala = [{ "district_id": 301, "district_name": "Alappuzha" },
                    { "district_id": 298, "district_name": "Kollam" },
                    { "district_id": 296, "district_name": "Thiruvananthapuram" },
                    { "district_id": 303, "district_name": "Thrissur" },
                    { "district_id": 304, "district_name": "Kottayam" },
                    { "district_id": 305, "district_name": "Kozhikode" },
                    { "district_id": 302, "district_name": "Malappuram" },
                    { "district_id": 307, "district_name": "Ernakulam" },
                    { "district_id": 306, "district_name": "Idukki" },
                    { "district_id": 297, "district_name": "Kannur" },
                    { "district_id": 295, "district_name": "Kasaragod" },
                    { "district_id": 308, "district_name": "Palakkad" },
                    { "district_id": 300, "district_name": "Pathanamthitta" },
                    { "district_id": 299, "district_name": "Wayanad" }];


client.on('message',message=>{
    //checks if the message not contain prefix or author is bot, condition true =>no action done
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    //slices the command
    const args =message.content.slice(prefix.length).split(/ +/);
    const command=args.shift().toLowerCase();


    if(command === 'ping'){

        client.commands.get('ping').execute(message, args);

    }else if(command == 'link'){

        client.commands.get('link').execute(message,args);

    }else if (command == 'help'){

        client.commands.get('help').execute(message,args);
    }




})

client.login(process.env.BOTTOKEN);