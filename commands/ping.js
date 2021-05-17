module.exports={
    name:'ping',
    description:'This is a ping command replies pong',
    execute(message,args){
        message.channel.send('pong!');
    }
}