function carregar() {      //carregar a página
    var mensagem = document.getElementById("mensagem")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    mensagem.innerHTML = `Agora são ${hora} horas do dia ${data} `

    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = "manha.jpg"
        document.body.style.background = "#F8F29F"

    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = "tarde.jpg"
        document.body.style.background = "#F48333"

    } else {
        // BOA NOITE!
        img.src = "noite.jpg"
        document.body.style.background = "#080A8B"

    }

}



