const schedule = require('node-schedule')

const tarea1 = schedule.scheduleJob('*/5 * 12 ** 2', function(){
   console.log('Executando tarefa 1', new Date().getSeconds)
})