require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();
const prefix ='-';

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
                    { "district_id": 299, "district_name": "Wayanad" }]


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
    }else if (command == 'help'){
        message.channel.send(new Discord.MessageEmbed()
						.setColor('#00aad2')
						.setTitle('Help')
						.addFields(
							{ name: '-login', value: 'Hyperlink to official cowin website' },
							{ name: '-ping', value: 'Check if bot is working' },
							{ name: '-help',value:'List All Commands'}
                            { name: '-check',value:'Check for Available Vaccine slot'}
						));
    }




})



client.login(process.env.BOTTOKEN);