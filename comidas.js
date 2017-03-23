function Comida(x, y, largura, altura) {
	//Atributos
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	//Metodos
	this.desenharComida = function(){
		fill(255, 102, 255);
		noStroke();
		rect(this.x, this.y, this.largura, this.altura);
	}

	this.mover = function(largura, altura){
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
	}
}