//Testando vários tipos de Error

function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros')

        if (typeof arr !== 'object')
            throw new TypeError('Array precisa ser do tipo object')

        if (typeof num !== 'number')
            throw new TypeError('Array precisa ser do tipo number')

        if (arr.length !== num) throw new RangeError('Tamanho inválido')

        return arr
    } catch (e) {
        if(e instanceof ReferenceError) {
            console.log("Erro ReferenceError")
            console.log(e.message)
        }else if(e instanceof TypeError) {
            console.log("Erro TypeError")
            console.log(e.message)
        }else if(e instanceof RangeError) {
            console.log("Erro RangeError")
            console.log(e.message)
        }else {
            console.log("Erro não identificado:" + e)
        }
    }
}