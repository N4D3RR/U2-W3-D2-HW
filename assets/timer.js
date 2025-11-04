//var varie
let seconds = 0
const savedValue = sessionStorage.getItem("contatore")

//verifica e recupero valore
if (savedValue) {
  seconds = parseInt(savedValue) // = savedValue in questo caso funziona uguale
}

// mostra il tempo
function counter() {
  if (seconds === 1) {
    document.getElementById("counter").textContent = `${seconds} secondo`
  } else {
    document.getElementById("counter").textContent = `${seconds} secondi`
  }
}

//avvia al caricamento della pagina
counter()

//cronometro, si aggiorna ogni secondo con counter()
setInterval(() => {
  seconds++
  sessionStorage.setItem("contatore", seconds)
  counter()
}, 1000)
