function falaDepoisDe(segundos, frase){
   return new Promise((resolve, reject) =>{
      setTimeout(()=>{
         resolve(frase)
      }, segundos * 1000)
      if(!frase){
         reject('error')
      }
   })
}
falaDepoisDe(2, 'Que legal')
.then(frase => frase.concat('?!?'))
.then(outrafrase => console.log(outrafrase))
.catch(e => console.log(e))