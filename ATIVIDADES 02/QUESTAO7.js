var peso = Number(prompt("Informe o seu peso: "));
var engordar = peso + (peso * 0.15);
var emagrecer = peso - (peso * 0.2);
alert("O peso atual é: " + peso + "\n" + "ENGORDOU E PESA: KG " + engordar.toFixed(2) + "\n" + "EMAGRECEU E PESA: KG" + emagrecer);
