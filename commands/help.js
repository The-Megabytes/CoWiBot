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
                name: '-register',
                value: 'Display list of districts with district codes to choose from' 
            },
            {
                name: '-states',
                value: 'Display list of states to choose from. Inorder to select a state and list the districts use :\n\` !district <state id> \`' 
            },
            { 
                name: '-district',
                value: 'Displays link of districts in the state selected .' 
            },

        
            
        ));
    }
}