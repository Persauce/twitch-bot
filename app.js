const req= require('tmi.js');

//Connects to the tmi client and selects which channel u listen to
let client = new req.Client({
    connection:{
        reconnect:true
    },
    channels:[
        'Lone_Shark'
    ]

    });
client.connect();

//making a new listener

client.on('message',async(chan,text,messs)=>{
    console.log('this channel',{
        chan,
        user:text.username,
        messs
    });
});