var randomNumber1 = Math.floor(Math.random() * 2) + 1;

let dato1;
dato1 = window.prompt("Elige entre sol o aguila", randomNumber1);

if(dato1 == "aguila" && randomNumber1==1){
	document.write(`<br/> <br/> Ganaste ` );
	document.querySelector(".img1").setAttribute("src","aguila.png");
} else if(dato1 == "sol" && randomNumber1==2){
	document.write(`<br/> <br/> Ganaste` );
	document.querySelector(".img1").setAttribute("src","sol.png");
} else{
	document.write(`<br/> <br/> Perdiste ` );
	if(randomNumber1==1){
		document.querySelector(".img1").setAttribute("src","aguila.png");
	}else if(randomNumber1==2){
		document.querySelector(".img1").setAttribute("src","sol.png");
	}
}
