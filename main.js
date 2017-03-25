var largura, altura;
var frames = 10;
var escala, hit;
var jogador1;
var comida;

function setup(){
	//largura = windowWidth;
	//altura = windowHeight;
	largura = 300;
	altura = 300;
	escala = 10;
	tela = createCanvas(largura, altura);
	tela.position((windowWidth/2.0)-150, (windowHeight/2.0)-150);
	frameRate(frames);

	//Objetos
	jogador1 = new Cobra(150, 0, escala, escala, escala, [38, 40, 37, 39]);
	jogador1.udlr = [false, true, false, false];
	comida = new Comida(0, 0, escala, escala);
	comida.mover(largura, altura, [jogador1.x, jogador1.y], jogador1.calda);
}

function draw(){
	background(0);
	grade();
	fill(255);
	textSize(8);
	text("Fabricio Junior", 5, 12);
	//Rodar
	hit = collideRectRect(jogador1.x+1, jogador1.y+1, jogador1.largura-2, jogador1.altura-2, comida.x, comida.y, comida.largura, comida.altura);
	if(hit == true){
		jogador1.comeu();
		comida.mover(largura, altura, [jogador1.x, jogador1.y], jogador1.calda);
	}
	jogador1.atualizarPosicao(largura, altura);
	//Desenhar
	comida.desenharComida();
	jogador1.desenharCobra();
	//print("X: " + jogador1.x + "| Y: " + jogador1.y);
	fill(0, 255, 0);
	textSize(12);
	//text(jogador1.calda.length, 5, 24);
	if(jogador1.calda.length <= 9){text(jogador1.calda.length, 285, 15);}
	else if(jogador1.calda.length > 9 && jogador1.calda.length <= 99){text(jogador1.calda.length, 280, 15);}
	else if(jogador1.calda.length > 99 && jogador1.calda.length <= 999){text(jogador1.calda.length, 275, 15);}
	else{text(jogador1.calda.length, 270, 15);}
	
}

function keyPressed(){
	jogador1.botaoPressionado(keyCode);
}

function grade(){
	stroke(255);
	//Topo
	line(0, 0, largura, 0);
	//Base
	line(0, altura-1, largura-1, altura-1);
	//Esquerda
	line(0, 0, 0, altura-1);
	//Direita
	line(largura-1, 0, largura-1, altura-1);
	stroke(0);
}