let produto, venda, percentual, decimapercentual

produto = parsefloat(prompt("qual o valor do produto que deseja vender?"))
percentual = parseFloat(prompt("digite o percentual que você quer adicionar na hora da venda"))

decimalpercentual = percentual / 100
venda = produto + (produto * decimalpercentual)

document.write(`Esse produto deve ser vendido por R$ ${venda.tofixed(2)}`)