const Discord = require('discord.js');

module.exports={
    name:'link',
    description:'This is a command sends link for registration',
    execute(message,args){
        //message.channel.send('Click link below to login & register \n https://selfregistration.cowin.gov.in/');

        const linkEmbed = new Discord.MessageEmbed()
        .setColor('FF3C12')
        .setTitle('Click Here To Open Cowin Website !')
        .setURL('https://selfregistration.cowin.gov.in/')
        .setDescription('Use the link to login and book your slots')
        .setImage('https://images.indianexpress.com/2021/02/Co-WIN.jpg')
        .setFooter('Give Priority To Elders')
        message.channel.send(linkEmbed);

    }
}