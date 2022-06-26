//Calcular fatorial de um número 

function fatorial(n){
    let fatorial = 1
    for(let contador = n; contador > 1; contador --){
        fatorial *= contador 
    } 
    return fatorial
}

console.log(fatorial(9))