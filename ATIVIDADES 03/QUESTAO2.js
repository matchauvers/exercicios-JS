var nome = prompt("Informe seu nome: ");
var sexo = prompt("Informe seu sexo: \n 1. Feminino \n 2. Masculino ");
var estadoCivil = prompt("Informe seu estado civil: \n 1. Solteiro(a) \n 2. Casado(a) ");
if (sexo == "1" && estadoCivil == "2") {
    var tempoCasada = prompt("Quantos anos de casada: ");
    alert(nome + " tem " + tempoCasada + " de casada ");
}
else {
    alert(nome + " é do sexo " + sexo + " e seu estado civil é " + estadoCivil);
}
