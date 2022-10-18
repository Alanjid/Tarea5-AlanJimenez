
let dato1, dato2, num1, num2;
dato1 = window.prompt("Introduce primer número ?", "0");
num1 = parseInt(dato1);
dato2 = window.prompt("Introduce segundo número ?", "0");
num2 = parseInt(dato2);
if(num1==num2){
	document.write(`<br/> <br/> Los numeros son iguales ` );
}
if(num1>num2){
	document.write(`<br/> <br/> El numero mayor es ${num1} ` );
}
if(num1<num2){
	document.write(`<br/> <br/> El numero mayor es ${num2} ` );
}