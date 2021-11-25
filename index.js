function escolhaPersonagem() {
    var escolha = prompt("Escolha seu Personagem\n 1-MOREJ THE PROGRAM WARRIOR\n 2-ILSE THE SOFT RANGER\n 3-OILEH THE MONITOR WIZZARD")

    if (escolha == 1) {
        window.location.href = "./MORAJ/moraj1.html"
    }else if (escolha == 2){
        window.location.href = "./ILSE/ilse1.html"
    }else if(escolha == 3){
        window.location.href = "./OILEH/oileh1.html"
    }else{
        alert("Escolha o número de um peronagem")
    }
}


function voltarDoInicio() {
    window.location.href = "./index.html"
}
