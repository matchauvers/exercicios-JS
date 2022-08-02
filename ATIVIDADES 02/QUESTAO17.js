var preco = prompt("Informe o preço do produto: ");
var opcaoPagamento = prompt("Escolha a opção de pagamento:\n 1. À vista \n 2. Cartão de Crédito");
var resultado
if (opcaoPagamento == 1) {
    resultado = preco - (preco * 0.1);
    alert("O valor à vista a ser pago é: R$ " + resultado.toFixed(2));
}
else if (opcaoPagamento == 2) {
    resultado = preco / 3;
    alert("O valor a ser pago em 3x no cartão é: R$ " + resultado);
}
else {
    alert("ERROR 404");
}
