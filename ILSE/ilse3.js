function escolhaDoJogador() {
    var escolha = prompt("Aparantemente são códigos antigos e neles parecem ter alguma tipo de padrão. Qual conteria corretamente o valor do caminho a seguir ?\n 1-var sigaPorEsseCaminho;\n 2-var (sigaPorEsseCaminho);")

    if (escolha == 1) {
        window.location.href = "../index2.html"
    }else if (escolha == 2){
        alert("Seus conhecimentos te trairam e uma fenda se abre no chão. Fim da jornada...")
        window.location.href = "../index.html"
    }
    else{
        alert("Escolha um número válido!")
    }
}