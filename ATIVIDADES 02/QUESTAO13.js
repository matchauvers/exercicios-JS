var numero = prompt("Informe o número da tabuada desejado: ");
tabuada();
function tabuada() {
    for (let i = 1; i <= 10; i++)
        document.write(numero + " x " + i + " = " + (numero * i) + "<br />");
}   
