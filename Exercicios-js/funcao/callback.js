const fabricantes =["Mercedes", "audi", "BMW"];

function imprimir(nome, indice){
   console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)