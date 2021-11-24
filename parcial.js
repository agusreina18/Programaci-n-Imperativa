function dividir(number1, number2){
    let a= number1;
    let b= number2;

    if (typeof a === "number" && typeof b === "number" && b !== 0) {
        console.log("a dividido b es: " + a/b);
    }
    else {
        console.log("No es posible realizar la división"); 
    }
}
console.log(typeof 10);
dividir (10, 5);
dividir(5,0);
dividir ("10", 5);
dividir ("10", "5");
