const tituloH2 = document.getElementById('titulo-msg');
const imagen= document.getElementById('image');
const textArea = document.getElementById('area-texto');
const botonCopy = document.getElementById('boton-copiar');
const parrafoImg= document.getElementById('parrafo');

 function copiar(){   
  let textoCopiado = parrafoImg.textContent;
  navigator.clipboard.writeText(textoCopiado);  
  textArea.value = textoCopiado
  tituloH2.textContent = "Texto copiado con éxito";
  tituloH2.style.color = "green"
  imagen.src="./img/successful.png" ;
}

function encriptar(){
    let texto = document.getElementById('area-texto').value;
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")    
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        tituloH2.textContent = "Texto encriptado con éxito";
        tituloH2.style.color = "#0a3871";
        parrafoImg.textContent = textoCifrado;
        imagen.src = "./img/lock.jpg";
        botonCopy.style.display = 'block'
      } else {
        imagen.src = "./img/Muñeco.png";
        tituloH2.textContent = "Ningún mensaje fue encontrado";
        parrafoImg.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        botonCopy.style.display = 'none'
        alert("Ups!, Debes ingresar un texto");
        }     
}

function desencriptar(){
    let texto = document.getElementById('area-texto').value;
    let textoCifrado = texto
        .replace(/ai/gi, "a")    
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        tituloH2.textContent = "Texto desencriptado con éxito";
        tituloH2.style.color = "#0a3871";
        parrafoImg.textContent = textoCifrado;
        imagen.src = "./img/unlock.jpg";
        botonCopy.style.display = 'block'
      } else {
        imagen.src = "./img/Muñeco.png";
        tituloH2.textContent = "Ningún mensaje fue encontrado";
        parrafoImg.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        botonCopy.style.display = 'none'
        alert("Ups!, Debes ingresar un texto");
        }     
}    

// /*
// /*Esta funcion no permite pegar (ctrl+v) nada en el text area */
// window.onload = function() {
//     var myInput = document.getElementById('area-texto');

//     myInput.onpaste = function(e) {
//       e.preventDefault();
//       alert("esta acción está prohibida");
//     }

    // myInput.oncopy = function(e) { /*Esta funcion no permite copiar (ctrl+C) nada del text area */
    //     e.preventDefault();
    //     alert("esta acción está prohibida");
    //   }
// }
