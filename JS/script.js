function convertir() {
    var valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML=valor
    var de=document.getElementById("de").value;
    var a=document.getElementById("a").value;

    var dolar=213.77;
    var euro=233.33;
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