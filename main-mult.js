var largura, altura;
var frames = 10;
var escala, hit;
var jogador1;
var comida;
var colisaoJ1, colisaoJ2;
var j1TextoX, j1TextoY, j2TextoX, j2TextoY, empateX, empateY; 
var j1colidiu, j2colidiu;

function setup(){
	//largura = windowWidth;
	//altura = windowHeight;
	largura = 600;
	altura = 600;
	escala = 10;

	j1TextoX = -100;
	j1TextoY = -100;
	j2TextoX = -100;
	j2TextoY = -100;
	j1colidiu = false;
	j2colidiu = false;

	tela = createCanvas(largura, altura);
	tela.position((windowWidth/2.0)-300, (windowHeight/2.0)-300);
	frameRate(frames);

	//Objetos
	jogador1 = new Cobra(300, 0, escala, escala, escala, [38, 40, 37, 39], 255, 0, 0, 1);
	jogador1.udlr = [false, true, false, false];
	jogador2 = new Cobra(300, 590, escala, escala, escala, [87, 83, 65, 68], 0, 255, 0, 2);
	jogador2.udlr = [true, false, false, false];

	comida = new Comida(0, 0, escala, escala);
	comida.mover(largura, altura, jogador1.calda, jogador2.calda);
}

function draw(){
	background(0);
	grade();
	fill(255);
	textSize(10);
	text("Fabricio Junior", 5, 12);
	//Rodar
	//Colisao Comida
	hit1 = collideRectRect(jogador1.x+1, jogador1.y+1, jogador1.largura-2, jogador1.altura-2, comida.x, comida.y, comida.largura, comida.altura);
	hit2 = collideRectRect(jogador2.x+1, jogador2.y+1, jogador2.largura-2, jogador2.altura-2, comida.x, comida.y, comida.largura, comida.altura);
	if(hit1 == true){
		jogador1.comeu();
		comida.mover(largura, altura, jogador1.calda, jogador2.calda);
	}
	else if(hit2 == true){
		jogador2.comeu();
		comida.mover(largura, altura, jogador1.calda, jogador2.calda);
	}

	if(jogador1.x == jogador2.x && jogador1.y == jogador2.y){empate();}


	//Colisao entre Jogadores
	for(var i=0; i<jogador2.calda.length; i++){
		colisaoJ1 = collideRectRect(jogador1.x+1, jogador1.y+1, jogador1.largura-2, jogador1.altura-2, jogador2.calda[i][0], jogador2.calda[i][1], comida.largura, comida.altura);
		if(colisaoJ1 == true){
			j1colidiu = true;
			break;
		}
	}

	for(var i=0; i<jogador1.calda.length; i++){
		colisaoJ2 = collideRectRect(jogador2.x+1, jogador2.y+1, jogador2.largura-2, jogador2.altura-2, jogador1.calda[i][0], jogador1.calda[i][1], comida.largura, comida.altura);
		if(colisaoJ2 == true){
			j2colidiu = true;
			break;
		}
	}

	if(j1colidiu == true && j2colidiu == true){empate();}
	else if(j2colidiu == true){j1Venceu();}
	else if(j1colidiu == true){j2Venceu();}

	jogador1.atualizarPosicao(largura, altura);
	jogador2.atualizarPosicao(largura, altura);
	//Desenhar
	comida.desenharComida();
	jogador1.desenharCobra();
	jogador2.desenharCobra();

	fill(255, 0, 0);
	textSize(12);
	if(jogador1.calda.length <= 9){text(jogador1.calda.length, 585, 15);}
	else if(jogador1.calda.length > 9 && jogador1.calda.length <= 99){text(jogador1.calda.length, 580, 15);}
	else if(jogador1.calda.length > 99 && jogador1.calda.length <= 999){text(jogador1.calda.length, 575, 15);}
	else{text(jogador1.calda.length, 570, 15);}
	fill(0, 255, 0);
	textSize(12);

	if(jogador2.calda.length <= 9){text(jogador2.calda.length, 585, 25);}
	else if(jogador2.calda.length > 9 && jogador2.calda.length <= 99){text(jogador2.calda.length, 580, 25);}
	else if(jogador2.calda.length > 99 && jogador2.calda.length <= 999){text(jogador2.calda.length, 575, 25);}
	else{text(jogador2.calda.length, 570, 25);}

	textSize(40);
	fill(255, 0, 0);
	text("Vermelho Venceu!", j1TextoX, j1TextoY);
	fill(0, 255, 0);
	text("Verde Venceu!", j2TextoX, j2TextoY);
	fill(255, 255, 255);
	text("Empate!", empateX, empateY);
	
}

function keyPressed(){
	jogador1.botaoPressionado(keyCode);
	jogador2.botaoPressionado(keyCode);
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

function j1Venceu(){
	j1TextoX = 140;
	j1TextoY = 200;
	noLoop();
}

function j2Venceu(){
	j2TextoX = 175;
	j2TextoY = 200;
	noLoop();
}

function empate(){
	empateX = 235;
	empateY = 200;
	j1TextoY = -200;
	j2TextoY = -200;
	noLoop();
}