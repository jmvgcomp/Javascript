//o array é heterogênio 
// cresce e diminui não tem tamanho fixo

const valores = [7.7, 9.8, 6.3, 2.4]
console.log(valores[3], valores[4])
valores[4] = 10
console.log(valores)
console.log(valores.length)

//heterogeneidade do array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
console.log(valores)

console.log(typeof valores)