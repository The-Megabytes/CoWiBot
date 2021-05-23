const Discord = require('discord.js');

module.exports={
    name:'help',
    description:'Help command gives list of commands that user can use to interact with bot',
    execute(message,args){
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("CoWiBot - Help")
        .setColor('#6768')
        .setFooter("Stay home , Stay Safe !")

        .addFields(
            {   
                name: '-help',
                value:'List All Commands'
            },
            { 
                name: '-link',
                value: 'Link to official CoWin website' 
            },
            { 
                name: '-ping',
                value: 'Check if bot is working' 
            },
            {
                name: '-states',
                value: 'Display list of states to choose from. Inorder to select a state and list the districts use :\n\` -district <state id> \`\n' 
            },
            { 
                name: '-district <state id>',
                value: 'Displays link of districts in the state selected .In order to select a district use: \n\` -register <district id> \`\n ' 
            },
            {
                name: '-register <district id>',
                value: 'Displays whether vaccine slots are available, If available link to vaccine portal is given' 
            },

            {
                name: '-reminder <district id>',
                value: 'Initially checks if slots are available, If not available, the bot notifies you at hourly intervals until a slot is available' 
            }

        
            
        ));
    }
}