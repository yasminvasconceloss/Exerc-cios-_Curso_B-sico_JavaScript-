// ESTRUTURAS DE REPETIÇÃO

function contar() {
    let inicio = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        //alert('Faltam dados!')
        res.innerHTML = "Não é possível iniciar a contagem"
    } else {
        res.innerHTML = "Contando:  <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){                    //Se o passo for menor ou igual a 0
            alert("Passo inválido - Considerando PASSO 1")
            p = 1
        }

        if (i < f) {
            // Contagem crescente 
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p ){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}