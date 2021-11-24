console.log ("Nivel 1")

function sumar(a,b){
resultado = a+b
return resultado;
}

function restar (){
    resultado = a-b
    return resultado;
}

function multiplicar(){
    resultado = a*b
    return resultado;
}

function dividir(){
    resultado = a/b
    return resultado;
}

console.log("---------------------------------")
console.log("Nivel 2")

console.log("-------------- Testeo de Operaciones / Calculadora --------------")

let a = 2
let b = 4

console.log ("si tengo el número " + a)
console.log ("y el número " + b)

console.log ("entonces la suma de " + a + " más " + b +" es " + sumar(a,b))

console.log ("la resta de " + a + " menos " + b +" es " + restar(a,b))

console.log ("la multiplicación entre " + a + " y " + b +" es " + multiplicar(a,b))

console.log ("y la división entre " + a + " y " + b + " es " + dividir(a,b))

console.log("pero si en el divisor colocamos 0 entonces la división entre "+ a +" y 0 es "+ dividir(a,0))


console.log("-------------------------------------")
console.log("Nivel 3")

function cuadradoDeUnNumero(a){
    resultado= a*a
    return resultado;
}

function promedioDeTresNumeros(a,b,c){
    resultado = sumar((sumar(a,b)),c)/3
    return resultado;
}

function calcularPorcentaje(total,porcentaje){
    resultado = multiplicar(total, dividir(porcentaje/100))
    return resultado;
}

function generadorDePorcentaje(a,b){
resultado = dividir(multiplicar(a,100),b)
return resultado;
}

console.log (cuadradoDeUnNumero(4));
console.log (promedioDeTresNumeros(3,9,12));
console.log (calcularPorcentaje(120,10));
console.log (generadorDePorcentaje(1,100));