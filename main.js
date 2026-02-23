//Creo una constate para el boton de elegir menú
const btnMenu = document.getElementById('btn-menu')
//Creo las variables para los platos
let plato1 = "Crema de calabaza al curry"
let plato2 = "Ensalada de espinacas y queso"
let plato3 = "Salmorejo cordobés"
let plato4 = "Risotto de setas y parmesano"
let plato5 = "Garbanzos con gambas"
let plato6 = "Lomo de bacalao con patatas"
let plato7 = "Solomillo a la pimienta verde"
let plato8 = "Salmonetes con pesto"
let plato9 = "Pechuga de pollo rellena"
let plato10 = "Berenjena rellena"

//Creo la funcion del boton
btnMenu.onclick = function () {
    //PRIMEROS PLATOS (1-5)
    let eleccion1 = parseint(prompt("Elija el primer plato según su número"))
    let nombrePlato1 = ""
    
    if (eleccion1 === 1) {
        nombrePlato1 = plato1
    }else if(eleccion1 === 2){
        nombrePlato1 = plato2
    }else if(eleccion1 === 3){
        nombrePlato1 = plato3
    }else if(eleccion1 === 4){
        nombrePlato1 = plato4
    }else if(eleccion1 === 5){
        nombrePlato1 = plato5
    }else{
        alert("Plato no válido")
    }

    //SEGUNDOS PLATOS (6-10)
    let eleccion2 = parseint(prompt("Elija el segundo plato según su número"))
    let nombrePlato2 = ""

    if (eleccion2 === 6) {
        nombrePlato2 = plato6
    }else if (eleccion2 === 7) {
        nombrePlato2 = plato7
    }else if (eleccion2 === 8){
        nombrePlato2 = plato8
    }else if (eleccion2 === 9){
        nombrePlato2 = plato9
    }else if (eleccion2 === 10){
        nombrePlato2 = plato10
    }else{
        alert("Plato no válido")
    }
//El resultado de la elección de platos 
    alert("Ha elegido de primer plato, " + nombrePlato1 + " y de segundo plato, " + nombrePlato2)
}
