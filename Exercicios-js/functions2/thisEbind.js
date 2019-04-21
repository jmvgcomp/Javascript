const pessoa = {
   saudacao: 'Olá',
   falar(){
      console.log(this.saudacao)
   }
}

pessoa.teste = 'olá2';
console.log(pessoa.teste)
const falar = pessoa.falar
falar(); //conflito entre paradigma OO e Funcional, o this passa a referenciar em outro contexto

const falarDePessoa = pessoa.falar.bind(pessoa) //o bind 'amarra' o objeto pessoa a função, então resolve o problema do this
falarDePessoa()