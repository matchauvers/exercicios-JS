var anoNascimento = prompt("Informe o ano de nascimento: ");
var anoAtual = prompt("Informe o ano atual: ");
var resultado = (anoAtual - anoNascimento);
document.write("Idade em anos: " + resultado + "<br>");
document.write("Idade em meses: " + (resultado * 12) + "<br>");
document.write("Idade em dias: " + (resultado * 365) + "<br>");
document.write("Idade em semanas: " + (resultado * 12 * 4.3).toFixed(2));
