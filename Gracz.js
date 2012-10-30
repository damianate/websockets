var Gracz = function(startX,startY){
	var x=startX,	
		y=startY,
		id,
		vel=2;

		//Gettery i Settery
		var getX = function(){
			return x;
		}
		var getY = function(){
			return y;
		}
		var setX = function(nowyX){
			x= nowyX;
		}
		var setY = function(nowyY){
			y= nowyY;
		}


		//aktualizacja wspolrzednych

		var update = function(keys){
			var stareX=x,
				stareY=y;

				if(keys.up){
					x=x+vel;
				};

		}


		var paint = function(ctx){
			ctx.fillRect(x,x,10,10);
		}

		return{
			getX: getX,
			getY: getY,
			setX: setX,
			setY: setY,
			paint: paint,
			update: update

		}
};