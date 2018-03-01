function devolveUmNumeroDecimal(texto){
    return parseFloat(prompt(texto).replace(",","."));

}

function formata(valor,numeroCasas){

return  valor.toFixed(numeroCasas).replace(".",",");
}


function formataGrana(valor){

    return formata(valor,2);
}

