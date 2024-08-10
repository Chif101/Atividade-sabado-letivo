let valor, rendimentos, final
const juros = 0.0007

valor = parseFloat(prompt("qual o valor que vai ser depositado?"))

rendimento = valor * juros
final = valor + rendimeneto 

document.write(`apos 1 mês, vai ter um total de R$ ${final.toFixede(2)}`)