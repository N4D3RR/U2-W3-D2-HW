//var varie
let seconds = 0
const savedValue = sessionStorage.getItem("contatore")

//verifica e recupero valore
if (savedValue) {
  seconds = savedValue // = savedValue in questo caso funziona uguale
}

// mostra il tempo
function counter() {
  if (seconds === 1) {
    document.getElementById("counter").textContent = `${seconds} secondo`
  } else {
    document.getElementById("counter").textContent = `${seconds} secondi`
  }
}

counter()

//cronometro, si aggiorna ogni secondo e salva in sessionStorage il valore
setInterval(() => {
  seconds++
  sessionStorage.setItem("contatore", seconds)
  counter()
}, 1000)
