require('dotenv').config();

const Discord = require('discord.js');
const mongoose = require('mongoose');
const client = new Discord.Client();
const prefix ='-';
//CowibotDB

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



client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.arg && !args.length) {
        let reply = `You didnt provide any arguments ${message.author}`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply("there was an error trying to execute that command!");
    }

    
});

mongoose.connect(process.env.MONGODB_SRV,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log('Connected to Database !!');
}).catch((err)=>{
    console.log(err)
});

client.login(process.env.BOTTOKEN);
