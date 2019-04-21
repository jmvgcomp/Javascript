const soma = function (x, y){
   return x + y
}

console.log(soma(3, 5))

const imprimirResultado = function(a,b, operacao = soma){
   console.log(operacao(a,b))
}
imprimirResultado(3,1)