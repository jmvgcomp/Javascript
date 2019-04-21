//Função JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal

function fun1(){
   //caso não retorne nada, undefined
}

// Armazenar em uma variavel

const fun2 = function(a,b){ return a+b}
console.log(fun2(2,3))

//armazenar em um array 
const array = [function(a,b){return a+b}, fun1, fun2]
console.log(array[0](1,2))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

//Passar função como parametro
function run(fun){
   fun()
}
run(function(){console.log('Executando')})

function soma(a,b){
   return function(c){
      console.log(a+b+c)
   }
}

soma(1,2)(3)
//ou
const tresMais = soma(1,2)
tresMais(3)
