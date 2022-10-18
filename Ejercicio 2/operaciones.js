let dato1, dato2, dato3, num1, num2, num3;
dato1 = window.prompt("Introduce primer calificacion", "0");
num1 = parseInt(dato1);
dato2 = window.prompt("Introduce segunda calificacion", "0");
num2 = parseInt(dato2);
dato3 = window.prompt("Introduce tercera calificacion", "0");
num3 = parseInt(dato2);
let resultado=num1 + num2 + num3;

if((resultado/3)>=5){
	document.write(`<br/> <br/> Alumno aprobado con ${resultado/3} ` );
}
if((resultado/3)<5){
	document.write(`<br/> <br/> Alumno suspendido con ${resultado/3} ` );
}