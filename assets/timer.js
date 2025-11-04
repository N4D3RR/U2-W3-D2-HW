let seconds = 0
const savedValue = sessionStorage.getItem("contatore")

if (savedValue) {
  seconds = savedValue // = savedValue in questo caso funziona uguale
}

function counter() {
  if (seconds === 1) {
    document.getElementById("counter").textContent = `${seconds} secondo`
  } else {
    document.getElementById("counter").textContent = `${seconds} secondi`
  }
}

counter()

setInterval(() => {
  seconds++
  sessionStorage.setItem("contatore", seconds)
  counter()
}, 1000)
