//Hola esto es un cambio de enigsa
//Prueba cambio
//Prueba cambio como colaborador

$(document).ready(function(){

//https://wav.hya.io/#/fx/amplify					editor de audio online


$(document).mousedown(function(event){

    event.preventDefault();//hacemos que las teclas no tengan funcion predefinida
     var key = event.which;
	//console.log(event.which);
    
	
	
	$("#izquierda").mousedown(function(){ZonaTocada = "izquierda";
		
		
		if((muerte == false) && ((key == 1 && EnInicio) || (key == 1 && EnFinal))) {init();}
	
	});
	$("#derecha").mousedown(function(){ZonaTocada = "derecha";
	
		if(key == 1 && !EnInicio && !EnFinal ){saltando = true;EmpiezaSalto = true;
			//$("#contieneaudio").append('<audio id = "musicaVuela" src ="musica/vuela.wav" autoplay></audio>')
		}else if((muerte == false) && ((key == 1 && EnInicio) || (key == 1 && EnFinal))) {init();}
	});
	
	
});


function PantallaPrincipal(){
	EnInicio = true;
	if(typeof Inicial_loop != "undefined"){
	clearInterval(flujo_loop);
	}
	clearInterval(flujo_loop);
	clearInterval(Final_loop);
	Inicial_loop = setInterval(Inicial,500); 
}
function PantallaFinal(){
	EnFinal = true;
	if(typeof Final_loop != "undefined"){
		clearInterval(flujo_loop);
	}
	clearInterval(flujo_loop);
	clearInterval(Inicial_loop);
	Final_loop = setInterval(Final,500); 
}
function Inicial(){
	musicaFinal.volume = 0;
	musica.volume = 0;
	musicaInicial.volume = 0.4;
	musicaInicial.play();
	PintaFondo();
	contexto.save();
	tituloTexto = "Jose Canovas";
	contexto.font = "bold 45px Courier";
	contexto.fillStyle = "blanco";
	contexto.textAlign = "center";
	contexto.fillText(tituloTexto,textoPosX,textoPosY-77);
	contexto.font = "bold 25px Courier";    
	SaltoText ="Pulsa para iniciar";
	InicialTexto = "en cualquier zona de la pantalla"
	contexto.fillText(SaltoText,textoPosX,textoPosY-17);
	contexto.fillText(InicialTexto,textoPosX,textoPosY+25);
	contexto.restore();     
}
function Final(){
	setTimeout(function(){muerte = false;},500)
	musicaFinal.volume = 0.8;
	musica.volume = 0;
	musicaInicial.volume = 0;
	musicaFinal.play();
	PintaFondo();
	contexto.save();
	tituloTexto = "Has Perdido";
	contexto.font = "bold 45px Courier";
	contexto.fillStyle = "blanco";
	contexto.textAlign = "center";
	contexto.fillText(tituloTexto,textoPosX,textoPosY-75);
	contexto.font = "bold 30px Courier";  
	contexto.fillStyle="black";
	PuntosTexto ="Puntos: "+ puntuacion;  
	contexto.fillText(PuntosTexto,textoPosX,textoPosY-15);
	contexto.font = "bold 20px Courier";  
	InicialTexto ="Pulsa para reiniciar";  
	contexto.fillText(InicialTexto,textoPosX,textoPosY+44);
	contexto.restore();     
}
  
function PintaPuntos(){
	contexto.save();
	PuntosTexto = "Puntos:"+puntuacion;
	contexto.font ="bold 30px Courier";
	contexto.fillStyle = "white";
	contexto.textAlign ="center";
	contexto.fillText(PuntosTexto,textoPosX,textoPosY-140);
	contexto.restore();
}
function PintaFondo(){
	contexto.save();
	contexto.drawImage(fondo_1,0,0,AnchoCanvas,AltoCanvas);
	if(EnInicio || EnFinal){
		contexto.drawImage(fondo_menus,0,0,AnchoCanvas,AltoCanvas)
	}
	contexto.restore();
}
function PintaJugador(){
	contexto.save();
	if(saltando){
		contexto.drawImage(imagenJugador2,jugador.posX,jugador.posY)
	}else{
	contexto.drawImage(imagenJugador,jugador.posX,jugador.posY);}
	contexto.restore();
}

function PintaObstaculos(){
	temporizador++;
	var t = 70 - (velocidadJuego*3);
	if(temporizador > t){
		nVeces++
		//Obstaculos
		obstaculo[obstaculoParaPintar].posX = AnchoCanvas+30+velocidadJuego;   
		obstaculo[obstaculoParaPintar].posY   = (AltoCanvas/100)*10;
		obstaculo[obstaculoParaPintar].height = Math.floor((Math.random()*150)+50);
		obstaculo[obstaculoParaPintar].pinta = true;  
		obstaculo[obstaculoParaPintar].contador = true;

		obstaculo[obstaculoParaPintar+1].posX = AnchoCanvas+30+velocidadJuego; 
		obstaculo[obstaculoParaPintar+1].posY  = obstaculo[obstaculoParaPintar].posY + obstaculo[obstaculoParaPintar].height+70;
		obstaculo[obstaculoParaPintar+1].height = ((AnchoCanvas/100)*90) - obstaculo[obstaculoParaPintar+1].posY;
		obstaculo[obstaculoParaPintar+1].pinta = true;
		//Monedas
		//console.log(obstaculo[obstaculoParaPintar].height)
		if(nVeces > Math.random()*3){
			if(obstaculo[obstaculoParaPintar].height < 150){
				moneda[monedaParaPintar].posX = AnchoCanvas+velocidadJuego;   
				moneda[monedaParaPintar].posY   = obstaculo[obstaculoParaPintar].height;
				moneda[monedaParaPintar].pinta = true;  

				moneda[monedaParaPintar+1].posX = (AnchoCanvas-15)+velocidadJuego;
				moneda[monedaParaPintar+1].posY  = obstaculo[obstaculoParaPintar].height+20;
				moneda[monedaParaPintar+1].pinta = true;
		
				moneda[monedaParaPintar+2].posX = (AnchoCanvas-30)+velocidadJuego;
				moneda[monedaParaPintar+2].posY  = obstaculo[obstaculoParaPintar].height+40;
				moneda[monedaParaPintar+2].pinta = true;
			}else{
				moneda[monedaParaPintar].posX = (AnchoCanvas+25)+velocidadJuego;   
				moneda[monedaParaPintar].posY   = obstaculo[obstaculoParaPintar].height +40;
				moneda[monedaParaPintar].pinta = true;  

				moneda[monedaParaPintar+1].posX = (AnchoCanvas+10)+velocidadJuego;
				moneda[monedaParaPintar+1].posY  = obstaculo[obstaculoParaPintar].height+20;
				moneda[monedaParaPintar+1].pinta = true;
		
				moneda[monedaParaPintar+2].posX = (AnchoCanvas-5)+velocidadJuego;
				moneda[monedaParaPintar+2].posY  = obstaculo[obstaculoParaPintar].height;
				moneda[monedaParaPintar+2].pinta = true;				
				
				
				}
		
		

			nVeces = 0;
			
		}
		switch(obstaculoParaPintar){
			case 0:
				obstaculoParaPintar = 2;
				break;  
			case 2:
				obstaculoParaPintar = 4;
				break; 
			case 4:
				obstaculoParaPintar = 6;
				break; 
			case 6:
				obstaculoParaPintar = 0;
				break; 
		}
		switch(monedaParaPintar){
			case 0:
				monedaParaPintar = 3;
				break;  
			case 3:
				monedaParaPintar = 6;
				break; 
			case 6:
				monedaParaPintar = 12;
				break; 
			case 12:
				monedaParaPintar = 0;
				break; 
		}
		temporizador=0;
	} 
	contexto.save();
	for(var i = 0; i < obstaculo.length; i++){
		if(obstaculo[i].pinta){
			contexto.fillStyle = "#8D410E";
			contexto.fillRect(obstaculo[i].posX, obstaculo[i].posY,obstaculo[i].width,obstaculo[i].height-huecosDanio);
			contexto.strokeStyle = "black";
			contexto.strokeRect(obstaculo[i].posX, obstaculo[i].posY,obstaculo[i].width,obstaculo[i].height-huecosDanio);
		}       
	}
	for(var i = 0; i < moneda.length; i++){
		if(moneda[i].pinta){
			contexto.fillStyle = "yellow";
			contexto.beginPath();
			contexto.arc(moneda[i].posX,moneda[i].posY,6.5,0,Math.PI*2,true);
            contexto.closePath();
			contexto.fill();
			//contexto.fillRect(moneda[i].posX,moneda[i].posY,moneda[i].width,moneda[i].height);
		}       
	}
	contexto.restore();
}


function ContarPuntos(){
	for(var i = 0; i < obstaculo.length; i++){
		if(obstaculo[i].posX + obstaculo[i].width < jugador.posX && obstaculo[i].contador){
			var rndm = Math.ceil(Math.random()*2);
			//console.log(rndm)
			$("#contieneaudio").append('<audio id = "musicaPuntos" src ="musica/puntos'+rndm+'.wav" autoplay volume = "0.3"></audio>')
			setTimeout(function(){$("#contieneaudio").html("");},500)
			puntuacion++;
			if(velocidadJuego < 100){velocidadJuego +=0.2;}
			obstaculo[i].contador = false;
		}
	}
}
function GravedadJugador(){
	jugador.posY += 4; 
}
function MoverObstaculos(){
	for(var i = 0; i < obstaculo.length; i++){
		if(obstaculo[i].pinta){
			obstaculo[i].posX -= velocidadJuego;
		}
	}
}
function MoverMoneda(){
	
	for(var i = 0; i < moneda.length; i++){
		if(moneda[i].pinta){
			moneda[i].posX -= velocidadJuego;
			
		}
	}
	
}
function Salto(){
	if(EmpiezaSalto){
		//console.log("empieza salto");
		SaltoPosY = jugador.posY;
		velocidad = 10;
		EmpiezaSalto = false;
	}
	if(jugador.posY > (SaltoPosY-20)){
		
		//console.log("llega al maximo");
		jugador.posY -= velocidad;
		if(velocidad>1){
			//console.log("va frenando");
			velocidad -= 2;
		}
	}else{
		saltando = false;
		}
}
function MantenmeDentro(){
	if(jugador.posY < ((AltoCanvas/100)*10)){
		muerte = true;
		PantallaFinal();
	}
	if(jugador.posY + jugador.height > ((AltoCanvas/100)*100)){
		muerte = true;
		PantallaFinal(); 
	}
}
function colision(){
	for(var i = 0; i < obstaculo.length; i++){
		if(obstaculo[i].pinta && 
			jugador.posX + jugador.width > obstaculo[i].posX && 
			jugador.posX < obstaculo[i].posX + obstaculo[i].width && 
			jugador.posY < obstaculo[i].posY + obstaculo[i].height-huecosDanio && 
			jugador.posY + jugador.height > obstaculo[i].posY){
				$("#contieneaudio").append('<audio id = "musicaMuerte" src ="musica/muerte.wav" autoplay></audio>')
				muerte = true;
				PantallaFinal();
				
		}
	}

}
function recogeMoneda(){
	for(var i = 0; i < moneda.length; i++){
		if(moneda[i].pinta && 
			jugador.posX + jugador.width > moneda[i].posX && 
			jugador.posX < moneda[i].posX + moneda[i].width && 
			jugador.posY < moneda[i].posY + moneda[i].height && 
			jugador.posY + jugador.height > moneda[i].posY){
				//console.log("recoge modena");
				cuentaMonedas++;
				console.log(cuentaMonedas);
				moneda[i].pinta = false;
		}
	}

}
function Flujo(){
	musicaFinal.volume = 0;

	musicaInicial.volume = 0;
	musica.volume = 0.2;
	musica.play();
	//console.log(obstaculoParaPintar)
	
	PintaFondo();
	
	MantenmeDentro();
	colision();
	recogeMoneda();
	PintaJugador();
	
	PintaObstaculos();
	
	PintaPuntos();
	
	MoverObstaculos();
	MoverMoneda();
	if(saltando == true){
		Salto();
	}else{
		GravedadJugador();
		}
	ContarPuntos(); 
	

}
function init(){
	cuentaMonedas = 0;
	retardoBool = 0;
	velocidadJuego = 3;
	muerte = false;
	EnInicio=false;
	EnFinal = false;
	puntuacion = 0;
	saltando = false;
	EmpiezaSalto = false;
	jugador = {"posX": (AnchoCanvas/100)*10 ,"posY": (AltoCanvas/2)-10,"width": 19,"height":10} 
	temporizador = 80;
                    
	for(var i = 0 ; i< obstaculo.length ; i++){
		obstaculo[i] ={"posX":AnchoCanvas,"posY":0,"width":60,"height":0,"pinta" :false,"contador":false}
	}
	for(var t = 0 ; t< moneda.length ; t++){
		moneda[t] ={"posX":AnchoCanvas,"posY":AltoCanvas/2,"width":10,"height":15,"pinta" :false,"contador":false}
	}
	if(typeof flujo_loop != "undefined"){
		clearInterval(flujo_loop);
	}
	clearInterval(Inicial_loop);
	clearInterval(Final_loop);    
	flujo_loop = setInterval(Flujo,30);
}
PantallaPrincipal();
});	