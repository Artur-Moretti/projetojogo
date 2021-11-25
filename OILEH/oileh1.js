function escolhaDoJogador() {
    var escolha = prompt("Você compreende ser um tipo de escrita usada por humanos em uma época remota .O Ancião te dá conhece algo sobre o grande Oasis, veja se compreende, mas qual seria a ordem certa dessa informação que eles chamam de HTML?\n 1-<html><head><body></body></head></html>\n 2-<head><html><body></body></html></head>"
    )

    if (escolha == 1) {
        window.location.href = "./oileh2.html"
    }else if (escolha == 2){
        alert("A ordem dos fatores altera o produto e o Oasis ficará apenas como uma lenda...")
        window.location.href = "../index.html"
    }
    else{
        alert("Escolha um número válido!")
    }
}