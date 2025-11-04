let seconds = 0
const savedValue = sessionStorage.getItem("contatore")

if (savedValue) {
  seconds = parseInt(savedValue) // = savedValue in questo caso funziona uguale
}

function timer() {
  if (seconds === 1) {
    document.getElementById("timer").textContent = `${seconds} secondo`
  } else {
    document.getElementById("timer").textContent = `${seconds} secondi`
  }
}

timer()

setInterval(() => {
  seconds++
  sessionStorage.setItem("contatore", seconds)
  timer()
}, 1000)
