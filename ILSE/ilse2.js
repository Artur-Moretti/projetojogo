function escolhaDoJogador() {
    var escolha = prompt("Esão todos agitados e percebendo que essa busca pode não ter fim, o grupo se vê perdido. O que você pode fazer?\n 1-Sugerir uma objetivos e metas para o grupo\n 2-Seguir sozinho, pois acha que vai se virar melhor sem eles.")

    if (escolha == 1) {
        window.location.href = "./ilse3.html"
    }else if (escolha == 2){
        alert("Por seguir sozinho, você não resistiu ao fervoroso deserto !!!!")
        window.location.href = "../index.html"
    }
    else{
        alert("Escolha um número válido!")
    }
}