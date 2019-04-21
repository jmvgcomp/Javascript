function getPreco(imposto = 0, moeda = 'R$'){
   return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}

const produto = {
   nome: 'Notebook',
   preco: 4589,
   desc: 0.15,
   getPreco
}

console.log(produto.getPreco())
console.log("=====================")

const carro = {nome: "BMW", preco: 98523.42, desc: 0.2}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log("=====================")
//a diferença entre o call e o apply é forma como passa os parametros 
const carro2 = {nome: "Camaro", preco: 99523.42, desc: 0.2}
console.log(getPreco.call(carro2, 0.7, '$'))
console.log(getPreco.apply(carro2, [0.7, '$'] ))