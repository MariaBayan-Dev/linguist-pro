const textarea = document.querySelector('#translate__textarea')
const resultado = document.querySelector('#translate__text')
const btnBorrar = document.querySelector('#translate__button-close')
const btnCopiar = document.querySelector('#translate__button-copy')
const btnCambiar = document.querySelector('#lenguage__button')
const bocadillos = document.querySelectorAll('.lenguage__change')
const contador = document.querySelector('#translate__counter')


//VARIBLE PARA CAMBIO IDIOMA
let esInglesAEspanol = true


//FUNCIÓN ASINCRONA PARA INTEGRAR API IA

async function traducir(texto) {
    try {
        // Se llama a la función propia serverless
        // en lugar de a Groq directamente
        const respuesta = await fetch("/api/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // Se manda el texto y el idioma de destino
            body: JSON.stringify({
                texto: texto,
                idioma: esInglesAEspanol ? "al español" : "al inglés"
            })
        })

        const datos = await respuesta.json()

        if(respuesta.ok) {
            resultado.textContent = datos.traduccion
        } else {
            console.log("Error:", datos.error)
        }

    } catch(error) {
        console.log("Error:", error)
    }
}


//TEMPORIZADOR PARA EL USUARIO

let temporizador

textarea.addEventListener("input", () => {
  contador.textContent = `${textarea.value.length}/500`

  clearTimeout(temporizador)
  temporizador = setTimeout(() => {
    const textoUsuario = textarea.value
    if(textoUsuario.trim() !== ""){
      traducir(textoUsuario)
    }
  }, 500)
})


//BORRAR TRADUCCIÓN

btnBorrar.addEventListener('click', () =>{
  textarea.value = ""
  resultado.textContent = ""
  contador.textContent = "0/500"
})


//COPIAR TRADUCCIÓN

btnCopiar.addEventListener('click', async () => {
  await navigator.clipboard.writeText(resultado.textContent)

  const copyText = document.querySelector('.translate__copy-text')
  copyText.textContent = "¡Copiado!"

  setTimeout(() =>{
    copyText.textContent = "Copiar"
  }, 1500)
})


//CAMBIO DE IDIOMA Y VICEVERSA

btnCambiar.addEventListener('click', () => {
  //1. Se invierte el estado
  esInglesAEspanol = !esInglesAEspanol
  
  //2. Se cambia los bocadillos de forma visual
  bocadillos[0].textContent = esInglesAEspanol ? "Inglés" : "Español"
  bocadillos[1].textContent = esInglesAEspanol ? "Español" : "Inglés"

  //3. Se guardan los valores actuales
  const textoActual = textarea.value
  const traduccionActual = resultado.textContent

  //4. Se intercambian los contenidos
  textarea.value = traduccionActual
  resultado.value =textoActual

  //5. Si hay texto, se vuelve a traducir
  if(textarea.value.trim() !== ""){
    traducir(textarea.value)
  }

  //6. Y por último, el contador con el nuevo texto del textarea
  contador.textContent = `${textarea.value.length}/500`
})