let cotacao, real, conversao

cotacao = parseFloat(prompt("qual o valor atual do cotação do dolar?"))
real = parseFloat(prompt("digite o valor disponivel em reais que você possui"))

conversao = real/cotacao

document.write(`R$ ${real.tofexed(2)} convertido para dolar equivale a U$ ${conversao.toFixed(2)}`)
