const produtos = [
   {nome: 'Borracha', preco: 3.45, fragil: false},
   {nome: 'Caderno', preco: 13.90, fragil: true},
   {nome: 'Kit de Lapis', preco: 41.22, fragil: false},
   {nome: 'Caneta', preco: 7.90, fragil: true}
]

const prod = produtos.map(p => p.fragil).reduce(function(resultado, fragil){
   return resultado && fragil
})

const algumFragil = (resulta, fragil) => resulta || fragil
console.log(produtos.map(p => p.fragil).reduce(algumFragil))