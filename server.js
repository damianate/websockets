var util = require("util"),
io = require("socket.io"),
Gracz = require("./Gracz").Gracz;

var socket, gracze;

function init(){
	gracze = [];

	socket=io.listen(8888);

socket.configure(function() { 
		socket.set("transports", ["websocket"]);
 
		socket.set("log level", 2);
	}); 

 setEventHandlers();
};
var setEventHandlers = function() {
	// Socket.IO
	socket.sockets.on("connection", onSocketConnection);
	socket.sockets.on("mojEvent", onMojEvent);
};

function onSocketConnection(client) {
	util.log("New player has connected: "+client.id);
	client.on("mojEvent",onMojEvent);

};
function onMojEvent(data){
	 
	util.log(data.x);
}
init();