const Discord = require('discord.js');
const fetch = require('node-fetch');

const message = new Discord.Message();

var districtsList = [
                     "Thiruvananthapram  -  296",
                     "Kollam  -  298",
                     "Alappuzha  -  301",
                     "Pathanamthitta  -  300",
                     "Kottayam  -  304",
                     "Idukki -  306",
                     "Ernakulam  -  307",
                     "Thrissur  -  303",
                     "Palakkad  -  308",
                     "Malappuram  -  302",
                     "Kozhikode  -  305",
                     "Wayanad  -  299",
                     "Kannur  -  297",
                     "Kasargod  -  295"
                    ]

    
var iterator = districtsList.values();
var result ="";

for(let elements of iterator){
    result= result.concat(elements+"\n");
}




module.exports={
    name:'register',
    description:'Lorem Ipsum',
    arg: true,
    execute(message,args){
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("Send your District ID")
        .setColor('#6768')
        .setFooter("Stay home , Stay Safe !")
        .addFields(
            {   
                name: 'use command -register [district id]',
                value:result
            },
            {
                name: 'For example ;',
                value:'send command "-register 295" for registering district as kasargod'
            }

        ));



        
    }
}
