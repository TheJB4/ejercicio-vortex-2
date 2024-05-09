function media(numeros){
    return numeros.length >= 1 ? (laSumaDeTodosLosNumeros(numeros) / numeros.length) : (NaN)
}

function mediana(numeros){
    let myCondition = isPar(numeros.length)
    let numerosSort = numeros.sort((a,b) => a - b)

    if(numeros.length === 0){
        return undefined
    }else if(myCondition){
        //return numeros[numeros.length / 2]
        let medianaPar = 0
        let numerosMitades = numerosSort.slice((numeros.length / 2 - 1),(numeros.length / 2 + 1 ))

        medianaPar = laSumaDeTodosLosNumeros(numerosMitades) / 2

        return medianaPar
    }else{
        let mitad = Math.floor(numeros.length / 2)
        let numeroMitad = numerosSort[Math.floor(mitad)]

        return numeroMitad
    }
}

function moda(numeros){
    let valoresRepetidos = elQueMasSeRepite(numeros)
    return  valoresRepetidos
}

function rango(){

}

function isPar(number){
    let miNumero = number
    if(typeof number === Array){
        miNumero = laSumaDeTodosLosNumeros(number)
    }

    return miNumero % 2 === 0 ? true : false
}

function laSumaDeTodosLosNumeros(array){
    return array.reduce((acc,value) =>acc + value,0)
}

function elQueMasSeRepite(numeros){
    let myObject = {}
    let manejador = numeros

    let contador = numeros.length 
    let numeroQueAparecio = 1

    while(contador >= 1){
        myObject[numeros[0]]={value:1}

        numeros.shift()
        for (let i = 0; i < numeros.length; i++) {
            const element = numeros[i];
           if(myObject.hasOwnProperty(element)){
            numeroQueAparecio++
            
        }
           break   
        }

        contador--
    }

    return myObject
}



module.exports = {
    media,
    mediana,
    moda,
    rango,
    isPar,
}
