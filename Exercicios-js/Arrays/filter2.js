Array.prototype.filter2 = function(callback){
   const novoArray = []
   for(let i = 0; i < this.length; i++){
      if(callback(this[i], i, this)){
         novoArray.push(this[i])
      }
   }
   return novoArray;
}

const produtos = [
   {nome: 'Borracha', preco: 3.45, fragil: false},
   {nome: 'Caderno', preco: 13.90, fragil: true},
   {nome: 'Kit de Lapis', preco: 41.22, fragil: false},
   {nome: 'Caneta', preco: 7.90, fragil: true}
]

const caro = p => p.preco > 10
const fragil = p => p.fragil == false

const resultado = produtos.filter2(caro).filter2(fragil)
console.log(resultado)