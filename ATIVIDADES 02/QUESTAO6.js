var salario = Number(prompt("Informe o salário do funcionário: "));
var vendas = (prompt("Informe o valor das vendas: "));
var comissao = vendas * 0.04;
alert("O salário final com comissão será de: R$" + (salario + comissao).toFixed(2));
