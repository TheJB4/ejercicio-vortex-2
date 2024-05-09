function repetidos(array){
    let valores = {}
    //esta parte crea la tabla de frecuenciass
    for(let i = 0; i < array.length; i++){
        if(valores[array[i]]){
            valores[array[i]].value++
        }else{
            valores[array[i]] = {
                value: 1
            }
        }
    }

    let objetoManejador = Object.entries(valores)[0]
    let moda = []

    for (const [key,value] of Object.entries(valores)) {
        if(value.value > 1 && objetoManejador[1].value !== value.value){
                moda.push(parseInt(key)) 
        }

        //falta devolver undefined cuando el valor es el mismo en el array
    }

    if(moda.length === 0){
        return undefined
    }else if(moda.length === 1){
        return moda[0]
    }else{
        return moda
    }
    
}

//repetidos([5, 8, 8, 9, 0, 8, 3, 2])
//repetidos([3, 9, 3, 10, 9, 0, 3, 9, 5, 10, 6, 10,0])
//repetidos([6, 8, 6, 3, 8, 3])

module.exports = {
    repetidos
}