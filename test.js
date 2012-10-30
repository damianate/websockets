var socket ;
var x=0;
function init() {
	
	socket = io.connect("http://localhost", {port: 8888, transports: ["websocket"]});

socket.emit("mojEvent", {x: x, y: 30});
}; 
