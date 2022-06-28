// comece a criar a sua função add na linha abaixo
function add (n1,n2){
    return n1 + n2;
}
console.log(add(3,5))
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(n1, n2){
    let multiplyy = 0;
    for(let i = 0; i < n2; i++){
        multiplyy += add(0, n1)
    }
    return multiplyy

}
console.log(multiply(4,6))

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (n1, n2 ){
    let power1 = 1;

    for(let i = 0; i < n2; i++){
        power1 = multiply(n1,power1)
        //a cada loop do n1 recebe 1(power1)
    }
    return power1
}
console.log(power(3,4))

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(n1){
    let fac = 1;
    for(let i = 1; i <= n1; i++){
        fac = multiply(fac, i)
    }
    return fac
}
console.log(factorial(5))

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci (n) {
    if(n < 1) return 0
    if(n <= 2) return 1

    let fibP2  = 0;
    let fibN1 = 1;
    let num = n;

    for(let i = 2; i <= n; i++){
       num = add(fibN1, fibP2)
       fibP2 = fibN1
       fibN1 = num
    }
    return num
}  
console.log(fibonacci(7))


// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');

