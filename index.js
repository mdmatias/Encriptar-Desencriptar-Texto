function encriptar(){
    let texto = document.getElementById('area-texto').value;

    let textoCifrado = texto
        .replace (a/gi, "ai")
        .replace (e/gi, "enter")
        .replace (i/gi, "imes")
        .replace (o/gi, "ober")
        .replace (u/gi, "ufat");

    if (texto.lenght !=0 ){
        document.getElementById('area-texto').value = textoCifrado;
    }else{
    }
}