const carrinho = [
   '{"nome": "Borracha", "preco": 3.45}',
   '{"nome": "Caderno", "preco": 13.90}',
   '{"nome": "Kit de Lapis", "preco": 41.22}',
   '{"nome": "Caneta", "preco": 7.90}'
]

const converteParaObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(converteParaObjeto).map(apenasPreco)
console.log(resultado)

