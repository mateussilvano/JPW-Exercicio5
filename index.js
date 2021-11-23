const argumentos = process.argv.slice(2)

const soma = argumentos.reduce(function(valorAnterior, item){
    
    if (item % 2 == 0){
        return valorAnterior + parseInt(item)
    }else{
        return valorAnterior
    }
    
},0)

console.log(soma)