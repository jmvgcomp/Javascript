//operador ... rest(juntar)/spread(espalhar)

//sar spread com objeto
const funcionarios = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionarios}

console.log(clone)

//usar spread com Array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(grupoFinal)