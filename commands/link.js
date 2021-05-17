module.exports={
    name:'link',
    description:'This is a command sends link for registration',
    execute(message,args){
        message.channel.send('Click link below to login & register \n https://selfregistration.cowin.gov.in/');
    }
}