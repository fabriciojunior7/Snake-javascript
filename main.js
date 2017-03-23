var largura, altura;
var frames = 15;
var escala, hit;
var jogador1;
var comida;

function setup(){
	//largura = windowWidth;
	//altura = windowHeight;
	largura = 500;
	altura = 500;
	escala = 10;
	createCanvas(largura, altura);
	frameRate(frames);

	//Objetos
	jogador1 = new Cobra(100, 10, escala, escala, escala, [38, 40, 37, 39]);
	jogador1.udlr = [false, true, false, true];
	comida = new Comida(0, 0, escala, escala);
	comida.mover(largura, altura);
}

function draw(){
	background(0);
	//Rodar
	hit = collideRectRect(jogador1.x+1, jogador1.y+1, jogador1.largura-2, jogador1.altura-2, comida.x, comida.y, comida.largura, comida.altura);
	if(hit == true){
		jogador1.comeu();
		comida.mover(largura, altura);
	}
	jogador1.atualizarPosicao();
	//Desenhar
	comida.desenharComida();
	jogador1.desenharCobra();
	//print("X: " + jogador1.x + "| Y: " + jogador1.y);
}

function keyPressed(){
	jogador1.botaoPressionado(keyCode);
}

function grade(){
	stroke(255);
	line(0, 0, largura, altura);
}