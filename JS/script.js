function convertir() {
    let valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML=valor
    let de=document.getElementById("de").value;
    let a=document.getElementById("a").value;

    let dolar=213.77;
    let euro=233.33;
    resultado=0;
    //Peso a Dolar
    if(de==1&&a==2)
    {
        resultado=valor/dolar;
    }
    //Peso a Euro 
    
    else if(de==1&&a==3)
    {
        resultado=valor/euro;
    }
    //Dolar a Peso
    else if(de==2&&a==1)
    {
        resultado=valor/dolar;
    }
    //Dolar a Euro
    else if(de==2&&a==3)
    {
        resultado=dolar/euro;
    }
    //Euro a Pesos
    else if(de==3&&a==1)
    {
        resultado=valor/euro;
    }
    // peso a peso, dolar a dolar y euro a euro
    else{
        resultado=valor;
    }
    document.getElementById("resultado").innerHTML="resultado: $"+resultado.toFixed(2);
}

// mis Arrays

let monedas = ["pesos" , "dolar" , "euro"];
console.log(monedas);

// agregamos monedas con push

monedas.push("pesos chilenos" , "pesos mexicanos" ,"usdt" ,"bitcoin")
console.log(monedas.length);
for(let i = 0; i < monedas.length ; i++) {
    console.log(monedas[i]);
}

//Objetos

const usuario1 ={
    nombre:"maria",
    apellido: "perez",
    Cuil:"27335687763"
}
console.log(usuario1);
