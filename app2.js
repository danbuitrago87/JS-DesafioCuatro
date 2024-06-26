/*Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador. */
let cont=0;
let num=prompt("Digite en número: ");

while(cont<num){
    cont++;
    alert(`Iteración: ${cont}`);
    
}