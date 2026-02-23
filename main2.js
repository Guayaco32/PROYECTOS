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

    
    let eleccion1 = parseInt(prompt("Elija el primer plato (del 1 al 5)"));
    let nombrePlato1 = "";

    switch (eleccion1) {
        case 1: 
        nombrePlato1 = plato1;
            break;
        case 2: 
        nombrePlato1 = plato2;
            break;
        case 3: 
        nombrePlato1 = plato3;
            break;
        case 4: 
        nombrePlato1 = plato4;
            break;
        case 5: 
        nombrePlato1 = plato5; 
            break;
        default: alert("Primer plato no válido");
    }

    // SEGUNDO PLATO (6-10)
    let eleccion2 = parseInt(prompt("Elija el segundo plato (del 6 al 10)"));
    let nombrePlato2 = "";

    switch (eleccion2) {
        case 6: 
        nombrePlato2 = plato6;  
            break;
        case 7: 
        nombrePlato2 = plato7;  
            break;
        case 8: 
        nombrePlato2 = plato8;  
            break;
        case 9: 
        nombrePlato2 = plato9;
            break;
        case 10: 
        nombrePlato2 = plato10;
            break;
        default: alert("Segundo plato no válido");
    }
//utilice \n para el salto de linea y se vea diferente
    alert("Menú elegido:\n1º: " + nombrePlato1 + "\n2º: " + nombrePlato2);
}