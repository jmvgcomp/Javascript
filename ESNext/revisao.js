//arrow function
const soma = (a, b) => a + b
console.log(soma(1,2))

//Arrow function (this)
const lexico1 = () => console.log(this === exports) //escrita dentro de um módulo, arquivo node
const lexico2 = lexico1.bind({})
lexico1() //true
lexico2() //true

//parametro default
function log(texto = 'Node'){
   console.log(texto)
}

log(2)

//operador rest (ou spread)
function total(...numeros){
   let total = 0
   numeros.forEach(n => total += n)
   return total
}

console.log(total(1,4,5,6))