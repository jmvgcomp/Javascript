//Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = "Cadeira"
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
   modelo: 'A4',
   valor: 89000,
   proprietario: {
      nome: 'Teste',
      idade: 59,
      endereco: {
         logradouro: 'Rua Teste',
         numero: 123
      }
   },
   condutores: [{
      nome: 'Junior',
      idade: 19
   },{
      nome: 'Ana',
      idade: 20
   }]
}

console.log(carro)