alert("hello");
const mensaje_entrada = document.querySelector("#texto-entrada");
const mensaje_salida = document.querySelector("#texto-salida");
const muneco = document.querySelector("#muneco");
const infoDre = document.querySelector("#info_dre");
const copiarBtn = document.querySelector("#btnCopiar");
const dre= document.querySelector("#dre");
const matriz_main = [
  ["e", "enter"],//i = 0
  ["i", "imes"],//i = 1
  ["a", "ai"],//i = 2
  ["o", "ober"],//i = 3
  ["u", "ufat"],//i = 4
];


function  bttEncriptar(){
  const texto = encriptarTexto(mensaje_entrada.value);
  muneco.style.display = "none";
  infoDre.style.display = "none";
  copiarBtn.style.display = "block";
  dre.classList.add("ajuste");
  mensaje_salida.innerHTML = texto;
  mensaje_salida.classList.add("ajuste");
}
 function encriptarTexto(mensajeEntrada) {
  for(let i=0 ; i <matriz_main.length; i++){
    if(mensajeEntrada.includes(matriz_main[i][0])){
      mensajeEntrada = mensajeEntrada.replaceAll(
        matriz_main[i][0],
        matriz_main[i][1]
      );
    }

  }
  return mensajeEntrada;

 }

 function bttnDesencriptar() {
  const texto = desencriptarTexto(mensaje_entrada.value);
  console.log(texto);
  mensaje_salida.innerHTML = texto;

  }

  function desencriptarTexto(mensajeEntrada){
    for(let i=0; i < matriz_main.length; i++){
      if(mensajeEntrada.includes(matriz_main[i][1])){
        mensajeEntrada = mensajeEntrada.replaceAll(
          matriz_main[i][1],
          matriz_main[i][0]
        );
    }
  }
  return mensajeEntrada;

}
