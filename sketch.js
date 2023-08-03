



function setup() {
  createCanvas(800, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
   }



