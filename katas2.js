// comece a criar a sua função add na linha abaixo
function add (n1,n2){
    return n1 + n2;
}
console.log(add(3,5))
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(n1, n2){

    return n1 * n2

}
console.log(multiply(4,6))

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (n1, n2 ){
    return n1 ** n2
}
console.log(power(3,5))

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(n1){
    let result = n1;
    for(let index = 1; index < n1; index++){
        result *= index
    }
    return result
}
console.log(factorial(5))

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci (n) {

    return (n + n) -1
}
console.log(fibonacci(7))


// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');

