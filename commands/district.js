const axios = require("axios");
const link = "https://selfregistration.cowin.gov.in/";
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
                `https://cowin.rabeeh.me/api/v2/admin/location/districts/${args[0]}`
            )
            .then(function (response) {
                // handle success
                //we are parsing the received json data
                const receiveddata = response.data;
                const data = receiveddata.data;
                const districts = data.districts;
                const districtCount = districts.length;
                console.log("Available districts " + districtCount);
                if (districtCount === 0) {
                    return message.channel.send("Enter a valid state id");
                }

                //creating chunk of size 25
                chunk = 25; //maximum number of values in a embedded message
                totalChunk = districtCount / chunk; //breaking down the total no of districts into chunks of 25 districts

                for (let i = 0; i < totalChunk; i++) {
                    districtState = districts.splice(0, chunk); //selecting sets of 25 states

                    //creating embeded message
                    const embed = new Discord.MessageEmbed();
                    embed.setTitle(`District List`);
                    embed.setDescription(`A list of districts with their id's`);
                    for (let i = 0; i < districtState.length; i++) {
                        embed.addField(
                            `${districtState[i].district_id}  ${districtState[i].district_name}`,
                            `for selecting this state type next command as : -register ${districtState[i].district_id}  `
                        );
                    }
                    //sending the embeded message
                    message.channel.send(embed);
                }

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
