const jsonHelper = module.require("./jsonHelper")

const electronicos = jsonHelper.leerJson("eletronicos")
//array de objetos que traigo del archivo json

//objeto
const tienda = {
    //propiedades
    articulos: electronicos,
    //metodos
    gananciaTotal: function () {
        return "La ganancia total es: $" + this.articulos.reduce((acumulador, elemento) => acumulador + elemento.precioEnUsd * elemento.cantVendidos , 0)
    },
    filtrarPorVendidos: function(numeroFiltrador){
        return this.articulos.filter((elemento) => numeroFiltrador <= elemento.cantVendidos)
    },
    aumentarPorcentaje: function(porcientoAAumentar){
       this.articulos.forEach(elemento => elemento.precioEnUsd *= (porcientoAAumentar/100 +1))
    }
}

console.log("_____________articulos de la tienda______________")
console.table(tienda.articulos)

console.log("_________ La ganancia total es ____________")
console.table(tienda.gananciaTotal())

console.log("___________ articulos filtrados por cantidad de vendidos___________")
console.table(tienda.filtrarPorVendidos(21))

console.log("_________aumentar porcentaje__________")
tienda.aumentarPorcentaje(100)
console.log(tienda.articulos)