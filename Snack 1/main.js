// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando 
// la somma degli elementi è minore di 50.


let array=[];
let numbers;
let sum=0;

while (sum < 50){
   
        numbers=parseInt(prompt("mi dia un numero"));
        sum+=numbers;
        if(sum<50){
             array.push(numbers);
        }else{
            alert("Basta più numeri!")
        }
        
    
}


document.getElementById("container").innerHTML=array;