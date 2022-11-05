const req= require('tmi.js');
require('dotenv').config;

//Connects to the tmi client and selects which channel u listen to
let client = new req.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection:{
        reconnect:true
    },
    channels:[
        'slamurcheek'
    ],
    identity:{
        username:process.env.USER,
        password:`oauth:${process.env.OAUTH}`
    }

    });
client.connect().catch(console.error);
console.log("connected");
//making a new listener

client.on('message',async(chan,text,messs)=>{
    console.log('this channel',{
        chan,
        user:text.username,
        messs
    });
    //this checks if the person who sent the message is NOT the bot itself
    let not = text.username !== process.env.USER;
    //sends a message of who and what they sent
    try{
        if (not){
        client.say(chan, `responding to${text.username} mess : ${messs}`).catch();
        }
    }
    catch{
    
    }

});
console.log(process.env.USER);
