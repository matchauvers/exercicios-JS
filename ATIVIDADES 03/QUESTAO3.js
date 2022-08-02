var a = Number(prompt("Informe o valor de A: "));
var b = Number(prompt("Informe o valor de B: "));
var c;
if (a == b) {
    c = a + b;
    document.write("O valor da soma de " + a + " + " + b + " = " + c);
}
else {
    c = a * b;
    document.write("A multiplicação de " + a + " * " + b + " = " + c);
}
