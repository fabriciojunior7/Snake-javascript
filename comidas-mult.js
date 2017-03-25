function Comida(x, y, largura, altura) {
	//Atributos
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	//Metodos
	this.desenharComida = function(){
		fill(255, 255, 0);
		noStroke();
		rect(this.x, this.y, this.largura, this.altura);
	}

	this.mover = function(largura, altura, calda1, calda2){
		px = int(random(10, largura-20));
		py = int(random(10, altura-20));

		if(px % 10 != 0){
			px -= px % 10;
		}
		if(py % 10 != 0){
			py -= py % 10;
		}
		this.x = px;
		this.y = py;

		for(var i=0; i<calda1.length; i++){
			if(px == calda1[i][0] && py == calda1[i][1]){
				this.mover(largura, altura, calda1, calda2);
			}
		}

		for(var i=0; i<calda2.length; i++){
			if(px == calda2[i][0] && py == calda2[i][1]){
				this.mover(largura, altura, calda1, calda2);
			}
		}
	}
}