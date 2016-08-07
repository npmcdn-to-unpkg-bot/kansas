$(function(){


	var size = 30;


	var done = function(){
		console.log("msnry?");
		var elem = document.querySelector('#kansas');
		var msnry = new Masonry( elem, {
			itemSelector: '.field'
		});
	};

	var random = function(min, max){
		return Math.random()*(max-min)+min;
	};

	var draw = function(){
		console.log("drawing");
		// document.getElementById("kansas").innerHTML = "";
		var count_x = window.innerWidth/size;
		var count_y = window.innerHeight/size;
		var count = count_x * count_y; 
		for(var i=0; i<count; i++){
			var field = document.createElement('div');
			field.style.width = (Math.random()<0.1) ? size*2+"px" : size+"px"; 
			field.style.height = (Math.random()<0.1) ? size*2+"px" : size+"px";
			var bg;
			var bright = (Math.random()<0.6) ? true : false; 
			if(bright){
				bg = "hsla("+random(90,160)+","+random(10,40)+"%,"+random(15,40)+"%,1)";
			}else{
				bg = "hsla("+random(30,90)+","+random(10,20)+"%,"+random(50,75)+"%,1)";	
			}
			field.style.background = bg;
			field.className = "field";
			
			var filler = (Math.random()<0.6) ? "circle" : "square"; 
			if(Math.random()<0.6 && field.style.width==field.style.height){
				if(filler=="circle"){
					var circle = document.createElement('div');
					circle.style.width = field.style.width; 
					circle.style.height = field.style.height;
					circle.className = "circle";
					if(bright){
						bg = "hsla("+random(30,90)+","+random(10,20)+"%,"+random(50,75)+"%,1)";	
					}else{
						bg = "hsla("+random(90,160)+","+random(10,40)+"%,"+random(15,40)+"%,1)";
					}
					circle.style.background = bg;	
					circle.style.borderRadius = size+"px";	
					field.appendChild(circle);	
				}else{
					var rect = document.createElement('div');
					console.log(field.style.width);
					if(Math.random()<0.5){
						rect.style.width = parseInt(field.style.width.split("px")[0])/2+"px";
						rect.style.height = field.style.height;
					}else{
						rect.style.height = parseInt(field.style.height.split("px")[0])/2+"px";
						rect.style.width = field.style.width;
					}
					rect.className = "circle";
					if(Math.random()<0.5){
					}else{
					}
					// bg = "hsla("+random(90,160)+","+random(10,40)+"%,"+random(15,40)+"%,1)";
					bg = "hsla("+random(30,90)+","+random(10,20)+"%,"+random(50,75)+"%,1)";	
					rect.style.background = bg;	
					field.appendChild(rect);	
				}
			}
			document.getElementById("kansas").appendChild(field);
		}
		done();
	};

	var addFiller = function(field, bg){
		// if(field.style.width)
	};

	draw();

	window.onresize = function(){
		// if bigger than before, add rectangles
		// draw();
	};
});
