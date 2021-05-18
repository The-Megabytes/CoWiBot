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
            .get(
                `https://cdn-api.co-vin.in/api/v2/admin/location/states`,
                options
            )
            .then(function (response) {
                // handle success
                //console.log(response.data);
                const data = response.data;
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
                for (let i = 0; i < states.length; i++) {
                    embed.addField(
                        `${states[i].state_id}  ${states[i].state_name}`,
                        `for selecting this state type next command as : !district ${states[i].state_id}  `
                    );
                }

                message.channel.send({ embed });
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
