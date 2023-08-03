//variaveis ator

var xAtor = 300;
var yAtor = 500;
var colisao = false;
var meusPontos = 0;

function mostraAtor (){
   image (imagemAtor, xAtor, yAtor, 60, 40);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;    
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeMover()){
        yAtor += 3;  
  }
 }
}

function verificaColisao (){
 // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (var i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 5)
    if (colisao){
      colidiu();   
      somColisao.play()
    if (pontosMaiorQueZero()){
      meusPontos -= 1; 
    }
    }
  }
}

function colidiu(){
  yAtor = 500;
}


function incluiPontos(){
  textAlign (CENTER);
  textSize (25);
  fill (180,0,255)
  text(meusPontos, width / 2.2, 27,);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    colidiu();
  }
}

function pontosMaiorQueZero(){
 return meusPontos > 0
}

function podeMover(){
  return yAtor < 500;
}

