const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

var avaliacao = 9.871
var avaliacao2 = 6.871

const total = avaliacao * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)