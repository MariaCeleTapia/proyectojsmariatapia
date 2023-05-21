function convertir() {
    let valor = parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML = valor
    let de = document.getElementById("de").value;
    let a = document.getElementById("a").value;

    let dolar = 213.77;
    let euro = 233.33;
    resultado = 0;
    //Peso a Dolar
    if (de == 1 && a == 2) {
        resultado = valor / dolar;
    }
    //Peso a Euro 

    else if (de == 1 && a == 3) {
        resultado = valor / euro;
    }
    //Dolar a Peso
    else if (de == 2 && a == 1) {
        resultado = valor / dolar;
    }
    //Dolar a Euro
    else if (de == 2 && a == 3) {
        resultado = dolar / euro;
    }
    //Euro a Pesos
    else if (de == 3 && a == 1) {
        resultado = valor / euro;
    }
    // peso a peso, dolar a dolar y euro a euro
    else {
        resultado = valor;
    }
    document.getElementById("resultado").innerHTML = "resultado: $" + resultado.toFixed(2);
}

//function elegir

//prompt("Hola, ingresa nombre y apellido") ;
//prompt ("ingresa tu cuil")

//alert (" Hola "   +  nombre + " " +"bienvenido a Casa de cambio TUC") ;


// mis Arrays

let monedas = ["pesos", "dolar", "euro"];
console.log(monedas);

// agregamos monedas con push

monedas.push("pesos chilenos", "pesos mexicanos", "usdt", "bitcoin")
console.log(monedas.length);
for (let i = 0; i < monedas.length; i++) {
    console.log(monedas[i]);
}

//Objetos para usuarios frecuentes

const usuario1 = {
    nombre: "maria",
    apellido: "perez",
    Cuil: "27335687763"
}
console.log(usuario1);

const usuario2 = {
    nombre: "maria",
    apellido: "jerez",
    Cuil: "27385687763"
}
consol.log(usuario2);



/**Eventos**/
const alertForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");

alertForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(alertaInput.value);
    alertForm.reset();
})

/**localStorage **/

let usuarioEnLocalStorge = localStorage.getItem("usuario");
console.log(usuarioEnLocalStorge);

let usuarioIngresado = prompt("ingrese su nombre");
localStorage.setItem("usuario-ingresado" , usuarioIngresado);
let usuarioIngresadoEnLocalStorge =localStorage.getItem("usuario-ingresado");
console.log(usuarioIngresadoEnLocalStorge);


