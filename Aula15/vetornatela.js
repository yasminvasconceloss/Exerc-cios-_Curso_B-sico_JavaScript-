let valores = [8, 1, 7, 4, 2, 9]
valores.sort()    //coloca os valores do vetor em ordem 

/*
console.log([0])
console.log([1])
console.log([2])
console.log([3])
console.log([4])
console.log([5])
*/

/*
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}