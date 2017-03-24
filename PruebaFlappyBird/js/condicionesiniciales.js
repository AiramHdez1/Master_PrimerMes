//Canvas 
var canvas =document.getElementById("canvas");               					
var contexto = canvas.getContext("2d");   
   contexto.canvas.width = window.innerWidth;                    
   contexto.canvas.height = window.innerHeight;  
var AnchoCanvas = $("#canvas").width();
var AltoCanvas =$("#canvas").height();
//Flujo
var flujo_loop ="";
var Inicial_loop = "";
var Final_loop= "";
var EnInicio;
var EnFinal;
var temporizador = 80;
var temporizadorMonedas = 0;
var temporizadorFondo = 0;
//Jugador
var saltando;
var EmpiezaSalto;
var SaltoPosY;
var velocidad;
var puntuacion;
var imagenJugador = new Image();
imagenJugador.src ="img/agula.png";
var imagenJugador2 = new Image();
imagenJugador2.src ="img/agula2.png";
var muerte= false;
//Obstaculos
var obstaculo = new Array(8);
var obstaculoParaPintar = 0;
var huecosDanio = 30;
var velocidadJuego = 3;
//Monedas
var moneda = new Array(15);
var monedaParaPintar = 0;
var nVeces = 0;
var cuentaMonedas = 0;



//HUD
ZonaTocada ="";
var fondo_1 = new Image();
fondo_1.src = "img/fondo.jpg";
var fondo_menus = new Image();
fondo_menus.src ="img/fondoStart.jpg";
var textoPosX= AnchoCanvas/2;
var textoPosY = AltoCanvas/2;
var PuntosTexto = "";
var InicialTexto = "";
var tituloTexto = "";
var SaltoText = "";
var musicaFondo = document.getElementById("musica");
var musicaInicial = document.getElementById("musicaInicio");
var musicaFinal = document.getElementById("musicaFin");
var musicaMuerte = document.getElementById("musicaMuerte");

