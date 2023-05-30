const cuadroDeTextoEl=document.querySelector('.cuadro-texto');
const cuadroDeMensajeEl=document.querySelector(".texto-con-mensaje");
const botonEncriptarEl=document.querySelector(".boton-encriptar");
const sinMensajeEl=document.querySelector(".sin-mensaje");
const mostrarMensajeEl=document.querySelector(".mostrar-mensaje");
const botonDesencriptarEl=document.querySelector(".boton-desencriptar");
const botonCopiarEl=document.querySelector(".boton-copiar-mensaje");

function botonAEncriptar(){
  const mensajeAEncriptar=encriptar(cuadroDeTextoEl.value);
  cuadroDeMensajeEl.value=mensajeAEncriptar;
  cuadroDeTextoEl.value="";
  sinMensajeEl.style.display="none";
  mostrarMensajeEl.style.display="flex"; 
}
botonEncriptarEl.onclick=botonAEncriptar;

function botonADesencriptar(){
  const mensajeAEncriptar=desencriptar(cuadroDeTextoEl.value);
  cuadroDeMensajeEl.value=mensajeAEncriptar;
  cuadroDeTextoEl.value="";
  sinMensajeEl.style.display="none";
  mostrarMensajeEl.style.display="flex"; 
}
botonDesencriptarEl.onclick=botonADesencriptar;
function copiarAlPortapapeles() {
  navigator.clipboard.writeText(cuadroDeMensajeEl.value);
  cuadroDeMensajeEl.value="";
  sinMensajeEl.style.display="block";
  mostrarMensajeEl.style.display="none"; 
}
botonCopiarEl.onclick=copiarAlPortapapeles;

function encriptar(mensaje){
mensaje=mensaje.toLowerCase();
const vocales=["e","i","a","o","u"];
const vocalesEncriptadas=["enter","imes","ai","ober","ufat"];
for(let i=0; i<vocales.length;i++){
    mensaje=mensaje.replaceAll(vocales[i],vocalesEncriptadas[i]);
}
return mensaje;
}

function desencriptar(mensaje){
  mensaje=mensaje.toLowerCase();
  const vocales=["e","i","a","o","u"];
  const vocalesEncriptadas=["enter","imes","ai","ober","ufat"];
  for(let i=0; i<vocales.length;i++){
      mensaje=mensaje.replaceAll(vocalesEncriptadas[i],vocales[i]);
  }
  return mensaje;
  }
  


