var nota1 = Number(prompt("Informe a 1° nota: "));
var nota2 = Number(prompt("Informe a 2° nota: "));
var nota3 = Number(prompt("Informe a 3° nota: "));
var situacao;
var mediaExercicio = Number(prompt("Informe a média de exercícios: "));
var mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicio) / 7;
if (mediaAproveitamento >= 90) {
    situacao = "A"
}
else if (mediaAproveitamento >= 75 & mediaAproveitamento < 90) {
    situacao = "B"
}
else if (mediaAproveitamento >= 60 & mediaAproveitamento < 75) {
    situacao = "C"
}
else if (mediaAproveitamento >= 40 & mediaAproveitamento < 60) {
    situacao = "D"
}
else {
    situacao = "E"
}
if (situacao == "A" || situacao == "B" || situacao == "C") {
    alert("Sua média de aproveitamento é: " + (mediaAproveitamento.toFixed(2)) + " ALUNO APROVADO ");
}
else {
    alert("Sua média de aproveitamento é: " + (mediaAproveitamento.toFixed(2)) + " ALUNO REPROVADO ");
}
