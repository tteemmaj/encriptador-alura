let usuarioTexto = document.querySelector('#texto-usuario');
let encriptarBtn = document.querySelector('.encriptar-btn');
let desencriptarBtn = document.querySelector('.desencriptar-btn');
let copiarBoton = document.querySelector('.vopiar-boton');
let botonActivo = false;
let textoResultado = document.querySelector('#texto-resultado');
let imgDerecha = document.querySelector('.img-derecha');
let tituloDerecha = document.querySelector('.titulo-texto');
let borrarIcon = document.querySelector('#borrar-icon');
let texto = "";


function mostrarBoton() {
  if (botonActivo = false) {
    copiarBoton.style.display = "none"
  } else {
    copiarBoton.style.display = "inline-block"
  }
}

function comprobar () {
  if (usuarioTexto.value === "") {
    alert("Tienes que escribir algo");
  } else{
    imgDerecha.style.display = "none";
    tituloDerecha.style.display = "none";
    let espacioResultado = document.getElementById('texto-resultado');
    espacioResultado.style.height = "90%"
    espacioResultado.style.textAlign = "left";
    mostrarBoton();
    botonActivo = true;
  }
} 

/* encriptar */

encriptarBtn.addEventListener('click', () => {
  if (usuarioTexto.value === "") {
    comprobar();
  } else{
    encritar();
    comprobar();
  }
  texto = ""; 
})

function encritar () {
  let encriptarTexto = usuarioTexto.value
  let finalText = encriptarTexto.toLowerCase();
  for (let i = 0; i < finalText.length; i++) {
    let element = finalText[i];
    switch (element) {
      case "a":
        element = "ai"
        break;
      case "e":
        element = "enter"
        break;
      case "i":
        element = "imes"
        break;
      case "o":
        element = "ober"
        break;
      case "u":
        element = "ufat"
        break;
      default:
        break;
    }
    texto += element;
  }
  textoResultado.textContent = texto;
}

/* Desencriptar */

function desencriptar() {
  let textoEncriptado = usuarioTexto.value
  let textoEncriptadoFinal = textoEncriptado.toLowerCase();
  textoEncriptadoFinal = textoEncriptadoFinal.replace(/ai/g, "a");
  textoEncriptadoFinal = textoEncriptadoFinal.replace(/enter/g, "e");
  textoEncriptadoFinal = textoEncriptadoFinal.replace(/imes/g, "i");
  textoEncriptadoFinal = textoEncriptadoFinal.replace(/ober/g, "o");
  textoEncriptadoFinal = textoEncriptadoFinal.replace(/ufat/g, "u");
  textoResultado.textContent = textoEncriptadoFinal;
}

desencriptarBtn.addEventListener('click', () => {
  if (usuarioTexto.value === "") {
    comprobar();
  } else {
    desencriptar();
    comprobar();
  }
  texto = ""; 
})

borrarIcon.addEventListener('click', () => {
  usuarioTexto.value = "";
})


usuarioTexto.addEventListener('input', () => {
  if (usuarioTexto.value.trim !== "") {
    borrarIcon.style.display = "inline-block"
  } else {
    borrarIcon.style.display = "";
  }
})

borrarIcon.addEventListener('click', () => {
  borrarIcon.style.display = "none";
  imgDerecha.style.display = "";
  tituloDerecha.style.display = "";
  textoResultado.value = "";
  copiarBoton.style.display = "none"
  let CentrarDivDerecho = document.querySelector('.div-derecho');
  CentrarDivDerecho.style.display = "flex";
  CentrarDivDerecho.style.justifyContent = "center";

});


/* Copiar texto encriptado */
copiarBoton.addEventListener('click', () => {
  let textoEncriptado = document.getElementById('texto-resultado');
  textoEncriptado.focus();
  document.execCommand('selectAll');
  document.execCommand('copy');
  alert("Texto copiado correctamente")
})
