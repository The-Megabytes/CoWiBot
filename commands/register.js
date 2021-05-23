const axios = require("axios");
const link = "https://selfregistration.cowin.gov.in/";
//import { createUser,updateUserData,readUserData, deleteUserData } from "../mongoCRUD";

const Discord = require("discord.js");

//options for axios
var options = {
    url: URL,
    method: "GET",
    headers: {
        Host: "cdn-api.co-vin.in",
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
    },
};

var date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

var formattedDate = date + "-" + month + "-" + year;

module.exports = {
    name: "register",
    description: "command to register for a part",
    arg: true,
    usage: "<district id>",
    execute(message, args) {
        //console.log(typeof(args[0]));

        if(!(args[0]>=1 && args[0]<=737) ){
            return message.channel.send('Error ! Please Enter Proper District ID');
        }
        //calling api via axios
        axios
            .get(
                `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${args[0]}&date=${formattedDate}`,
                options
            )
            .then(function (response) {
                // handle success
                //console.log(response.data);
                const data = response.data;
                const sessions = data.sessions;
                const available = sessions.length;

                const avilability = data.sessions[0].available_capacity;
                console.log("Available sessions " + sessions.length);

                
                //checks if the sessions are availabe
                if (available === 0) {
                    return message.channel.send(
                        "Currently sessions are not available in your district"
                    );
                }
                var count =0;

                for(let i=0;i<sessions.length ;i++){
                    if(data.sessions[i].available_capacity != 0){
                        count++;
                    }

                }
                console.log("Count "+count);

                if(count==0){
                    return message.channel.send(
                        "Currently sessions are not available in your district"
                    );
                }

                //creting a chunk of size 25
                chunk = 25;
                noofSlots = available / chunk;

                for (let i = 0; i < noofSlots; i++) {
                    Slots = sessions.splice(0, chunk);

                    //for creating an embeded message
                    const embed = new Discord.MessageEmbed();
                    embed.setTitle(`Available Sessions`);
                    embed.setDescription(
                        `A list of sessions available in your district`
                    );
                    
                    for (let i = 0; i < Slots.length; i++) {
                        if(Slots[i].available_capacity != 0){
                            
                            embed.addField(
                                `${Slots[i].name}`,
                                `Available capacity : ${Slots[i].available_capacity}\nMinimum Age Limit : ${Slots[i].min_age_limit}\nVaccine : ${Slots[i].vaccine}\nSlots : ${Slots[i].slots}`
                            );
                        }
                        
                    }
                   
                    message.channel.send({ embed });
                }
                

                message.channel.send(`Register for the session here: ${link}`);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                console.log("Sheri aayilla");
            })
            .then(function () {
                // always executed
            });
    },
};
