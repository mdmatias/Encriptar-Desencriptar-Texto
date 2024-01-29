
function encriptar(){
    let texto = document.getElementById('area-texto').value;
    let tituloH2 = document.getElementById('titulo-msg');
    let parrafoImg= document.getElementById('parrafo');
    let imagen= document.getElementById('image');

    let textoCifrado = texto
        .replace(/a/gi, "ai")    
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("area-texto").value = textoCifrado;
        tituloH2.textContent = "Texto encriptado con éxito";
        parrafoImg.textContent = textoCifrado;
        imagen.src = "./img/lock.jpg";
        document.getElementById('boton-copiar').style.display = 'flex'
      } else {
        imagen.src = "./img/Muñeco.png";
        tituloH2.textContent = "Ningún mensaje fue encontrado";
        parrafoImg.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        document.getElementById('boton-copiar').style.display = 'none'
        alert("Ups!, Debes ingresar un texto");
        }     
}

function desencriptar(){
    let texto = document.getElementById('area-texto').value;
    let tituloH2 = document.getElementById('titulo-msg');
    let parrafoImg= document.getElementById('parrafo');
    let imagen= document.getElementById('image');
    
    let textoCifrado = texto
        .replace(/ai/gi, "a")    
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("area-texto").value = textoCifrado;
        tituloH2.textContent = "Texto desencriptado con éxito";
        parrafoImg.textContent = textoCifrado;
        imagen.src = "./img/unlock.jpg";
        document.getElementById('boton-copiar').style.display = 'flex'
      } else {
        imagen.src = "./img/Muñeco.png";
        tituloH2.textContent = "Ningún mensaje fue encontrado";
        parrafoImg.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        document.getElementById('boton-copiar').style.display = 'none'
        alert("Ups!, Debes ingresar un texto");
        }     
}    


/*Esta funcion no permite pegar (ctrl+v) nada en el text area */
window.onload = function() {
    var myInput = document.getElementById('area-texto');
    myInput.onpaste = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }

    myInput.oncopy = function(e) { /*Esta funcion no permite copiar (ctrl+C) nada del text area */
        e.preventDefault();
        alert("esta acción está prohibida");
      }
}