const prod1 = {
   nome: '...',
   preco: 45
}

const prod2 = {
   nome: '...',
   preco: 1234
}

// função factory
function criarProduto(nome, preco){
   return {
      nome,
      preco,
      desconto: 0.1
   }
}

console.log(criarProduto("Monitor", 20));