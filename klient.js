var canvas,
	ctx;

	function init(){
		canvas = document.getElementById("miejsceGry");
		ctx = canvas.getContext("2D");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		klawisze = new klawisze();

		var startX = 20,
			startY = 20;

		lokalnyGracz = new Gracz(startX,startY);

		socket = io.connect("http://localhost",{port: 8888, transports:
			["websocket"]});

		remotePlayer=[];

		nasluchiwacze();
	}

	