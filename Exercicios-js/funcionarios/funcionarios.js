const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chiness = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
   return funcionario.salario > funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
   const funcionarios = response.data
   
   //mulher chinesa com menor salario
   const func = funcionarios.filter(chiness).filter(mulheres).reduce(menorSalario)
   console.log(func)
})