Array.prototype.reduce2 = function(callback, valorInicial){
   const indiceInicial = valorInicial ? 0 : 1
   let acumulador = this[0]
   for(let i = indiceInicial; i<this.length; i++){
      acumulador = callback(acumulador, this[i], i, this)
   }
   return acumulador;
}

const produtos = [
   {nome: 'Borracha', preco: 3.45, fragil: false},
   {nome: 'Caderno', preco: 13.90, fragil: true},
   {nome: 'Kit de Lapis', preco: 41.22, fragil: false},
   {nome: 'Caneta', preco: 7.90, fragil: true}
]

const resultado = produtos.map(p => p.preco).reduce2(function(acumulador, atual){
   console.log(acumulador, atual)
   return acumulador + atual
},10)

console.log(resultado)