const produtos = [
   {nome: 'Borracha', preco: 3.45, fragil: false},
   {nome: 'Caderno', preco: 13.90, fragil: true},
   {nome: 'Kit de Lapis', preco: 41.22, fragil: false},
   {nome: 'Caneta', preco: 7.90, fragil: true}
]

console.log(produtos.map(p => p.preco))

const resultado = produtos.map(p => p.preco).reduce(function(acumulador, atual){
   console.log(acumulador, atual)
   return acumulador + atual
},10)

console.log(resultado)