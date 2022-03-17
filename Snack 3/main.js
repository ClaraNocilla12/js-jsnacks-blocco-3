// Il software deve chiedere per 5 volte all’utente 
// di inserire un numero.Il programma stampa la somma di tutti 
// i numeri inseriti.

let num;
let sum=0;
let i=0;

do{
    num=parseInt(prompt("nummmmero"));
    do{
         if(isNaN(num)){
             num = parseInt(prompt("ti rissi nummmmero"));
          }
    } while (isNaN(num));
          sum+=num;

    i++
} while (i < 5)

document.getElementById("container").innerHTML=sum;