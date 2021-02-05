var roomName = location.hash.replace('#','');
if( roomName === ""){
    roomName = "home";
}

var socket = io('http://localhost:3000');
// NOTE: this example uses the chess.js library:
// https://github.com/jhlywa/chess.js

socket.emit('join', roomName);







socket.on('w' , ()=>{
    console.log("I'm White");
    
})

