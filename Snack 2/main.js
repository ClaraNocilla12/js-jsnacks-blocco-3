// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
// Ogni volta che ne crei uno, stampalo.ù

let N=parseInt(prompt("Mi dia un numero prego"));
let i=0;
let j;

 


while (i < N){
    let array=[];

    for(j=0; j<9; j++){
        array[j] = getRandomInt(100);
        array.push(getRandomInt(100));
        
        
         }
    document.getElementById("container").innerHTML+=`<div> ${array} </div>`;
    

    i++  
    
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}