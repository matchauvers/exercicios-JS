var preco = Number(prompt("Informe o preço do produto: "));
var resultado = preco - (preco * 0.1);
alert("O desconto sofrido foi de 10%, o novo preço do produto é: R$" + resultado.toFixed(2));
