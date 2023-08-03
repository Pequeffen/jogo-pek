//códigos da imagens e sons do jogo

//imagens

var imagemEstrada;
var imagemAtor;
var imagemCarro;
var imagemCarro2;
var imagemCarro3;

//sons

var somDaTrilha;
var somColisao;
var somPonto;




function preload(){
  imagemEstrada = loadImage("imagens/estrada.png")
  imagemAtor = loadImage ("imagens/pekator.png");
  imagemCarro = loadImage ("imagens/carro-1.png")
  imagemCarro2 = loadImage ("imagens/carro-2.png")
  imagemCarro3 = loadImage ("imagens/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound ("sons/euq.mp3.mp3");
  somPonto = loadSound ("sons/pek-grito.mp3");
  }

