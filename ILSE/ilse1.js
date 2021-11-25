function escolhaDoJogador() {
    var escolha = prompt("Você compreende ser um tipo de escrita usada por humanos em uma época remota. O Ancião te dá conhece algo sobre o grande Oasis, veja se compreende, mas qual seria a ordem certa dessa informação que eles chamam de HTML?\n 1-<head><html><body></body></html></head>\n 2-<html><head><body></body></head></html>")

    if (escolha == 2) {
        window.location.href = "./ilse2.html"
    }else if (escolha == 1){
        alert("A ordem dos fatores altera o produto e o Oasis ficará apenas como uma lenda...")
        window.location.href = "../index.html"
    }
    else{
        alert("Escolha um número válido!")
    }
}