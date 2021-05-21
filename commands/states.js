const axios = require("axios");
const Discord = require("discord.js");

var options = {
    url: URL,
    method: "GET",
    headers: {
        Host: "cdn-api.co-vin.in",
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
    },
};

module.exports = {
    name: "states",
    description: "list of all the states along with their id's",
    arg: false,
    usage: "<state id>",
    execute(message, args) {
        //for getting the list of states from the api
        axios
            .get(`https://cowin.rabeeh.me/api/v2/admin/location/states`)
            .then(function (response) {
                // handle success
                //console.log(response.data);
                const receiveddata = response.data;
                const data = receiveddata.data;
                const states = data.states;
                const available = states.length;
                console.log("Available states " + states.length);
                if (available === 0) {
                    return message.channel.send(
                        "Currently sessions are not available in your district"
                    );
                }

                //for creating an embeded message
                const embed = new Discord.MessageEmbed();
                embed.setTitle(`State List`);
                embed.setDescription(`A list of states with their id's`);
                for (let i = 0; i < available / 2; i++) {
                    embed.addField(
                        `${states[i].state_id}  ${states[i].state_name}`,
                        `for selecting this state type next command as : !district ${states[i].state_id}  `
                    );
                }

                message.channel.send(embed);
                console.log("Succesfully send the first embed");

                //for creating the  embeded message
                const secondembed = new Discord.MessageEmbed();
                half = Math.round(available / 2);
                for (let i = half; i < available; i++) {
                    secondembed.addField(
                        `${states[i].state_id}  ${states[i].state_name}`,
                        `for selecting this state type next command as : !district ${states[i].state_id}  `
                    );
                }

                message.channel.send(secondembed);

                console.log("Succesfully sent the second embed");

                message.channel.send(
                    `Inorder to select a state and list the districts us :\` !district <state id> \``
                );
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
