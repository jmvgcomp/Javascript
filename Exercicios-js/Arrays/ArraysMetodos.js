const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o último elemento
console.log(pilotos)
pilotos.push('Verstappen') //Adiciona elemento na última posição
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log()

pilotos.unshift('Hamilton')//adiciona o elemento no começo do array

//splice pode adicionar e remover elementos

pilotos.splice(2,0,'Massa', 'Bottas')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)