var preco = Number(prompt("Informe o preço do produto:"));
var formaPag = Number(prompt("Informe a forma de pagamento: \n1. À vista, com 10% de desconto \n2. À vista no cartão de crédito, com 15% de desconto \n3. Em duas vezes, preço normal \n4. Em duas vezes, com 10% de juros"));
switch (formaPag) {
    case 1:
        preco *= 0.9;
        break;
    case 2:
        preco *= 0.85;
        break;
    case 3:
        preco = preco;
        break;
    case 4:
        preco *= 1.1;
        break;
}
alert("Preço a ser pago: R$" + preco.toFixed(2));
