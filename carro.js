//códigos dos carros

var yCarros = [40, 96, 150, 210, 265, 318];
var velCarros = [5, 7, 6, 8, 4.7, 8.5];
var xCarros = [720, 720, 720, 720, 720, 720];
var comprimentoCarro = 60;
var alturaCarro = 40;



function mostraCarro(){
  for (var i = 0;  i < imagemCarros.length; i++){
    image (imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (var i = 0; i < imagemCarros.length; i++){
 xCarros[i] -= velCarros[i];
 }
}


function voltaPosicaoCarro(){
  for (var i = 0; i < imagemCarros.length; i++){
  if (passouATela (xCarros[i])){
    xCarros[i] = 770;
   }
}
}

function passouATela (xCarro){
  return xCarro < - 50;
}



