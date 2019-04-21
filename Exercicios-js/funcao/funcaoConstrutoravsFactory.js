class Pessoa{
   constructor(nome){
      this.nome = nome
   }

   falar(){
      console.log(`Meu nome é ${this.nome}`)
   }
}

function PessoaTeste(nome){
   this.nome = nome

   this.falar = function(){
      console.log(`Meu nome é ${nome}`)
   }

}
const pessoa2 = new PessoaTeste("teste3");
pessoa2.falar()