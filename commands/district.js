const axios = require("axios");
const { link, prefix } = require("../config.json");
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
    name: "district",
    description: "This calls the api using the district",
    arg: true,
    usage: "<state id>",
    execute(message, args) {
        axios
            .get(
                `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${args[0]}`,
                options
            )
            .then(function (response) {
                // handle success
                //console.log(response.data);
                const data = response.data;
                const districts = data.districts;
                const available = districts.length;
                console.log("Available districts " + districts.length);
                if (available === 0) {
                    return message.channel.send(
                        "Currently sessions are not available in your district"
                    );
                }
                //creating embeded message
                const embed = new Discord.MessageEmbed();
                embed.setTitle(`District List`);
                embed.setDescription(`A list of districts with their id's`);
                for (let i = 0; i < districts.length; i++) {
                    embed.addField(
                        `${districts[i].district_id}  ${districts[i].district_name}`,
                        `for selecting this state type next command as : -register ${districts[i].district_id}  `
                    );
                }
                message.channel.send({ embed });
                message.channel.send(
                    `Register for a district by the command : \` -register <district id> \``
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
