function escolhaDoJogador() {
    var escolha = prompt("Esão todos agitados e percebendo que essa busca pode não ter fim, o grupo se vê perdido. O que você pode fazer?\n 1-Seguir sozinho, pois acha que vai se virar melhor sem eles.\n 2-Sugerir uma objetivos e metas para o grupo")

    if (escolha == 2) {
        window.location.href = "./oileh3.html"
    }else if (escolha == 1){
        alert("Por seguir sozinho, você não resistiu ao fervoroso deserto !!!!")
        window.location.href = "../index.html"
    }
    else{
        alert("Escolha um número válido!")
    }
}