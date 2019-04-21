const aluno = 'Gui'
const status = 'Aprovado'

function tag(partes, ...valores){
   console.log(partes)
   console.log(valores)
   return 'Outra string'
}

console.log(tag `${aluno} está ${status}`)