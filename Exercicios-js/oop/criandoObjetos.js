//usando notação literal

const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc){
   //quando se cria um atributo interno dentro da função significa que ele será privado
   //quando se coloca o this, signifca que esse atributo será público
   this.nome = nome
   this.getPrecoComDesconto = () => {
      return preco * (1-desc)
   }
}

const produto1 = new Produto('Caneta', 2.99, 0.15)
const produto2 = new Produto('Notebook', 4982.99, 0.25)

console.log(produto1.getPrecoComDesconto(), produto2.getPrecoComDesconto())

//Função factory
function criaFuncionario(nome, salarioBase, faltas){
   return {
      nome, 
      salarioBase,
      faltas,
      getSalario(){
         return (salarioBase / 30) * (30 - faltas)
      }
   }
}

const f1 = criaFuncionario('Joao', 7980, 4)
const f2 = criaFuncionario('Maria', 11941.4, 1)
console.log(f1.getSalario(), f2.getSalario())