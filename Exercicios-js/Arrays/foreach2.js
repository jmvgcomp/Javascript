Array.prototype.forEach2 = function(funcallback){
   for(let i = 0; i< this.length; i++){
      funcallback(this[i], i, this)
   }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2((nome, indice) => console.log(`${indice+1}: ${nome}`))