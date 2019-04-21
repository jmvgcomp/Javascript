//não aceita repetição e não é indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras')
times.add('Vasco') //repetição para teste

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) //false -> case sensitive
console.log(times.has('Vasco')) //true
times.delete('São Paulo')
console.log(times.has('São Paulo')) //false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const pessoas = new Set(nomes)
console.log(pessoas)