//KEY per localStorage
const KEY = "nomeUtente"

// verifica e recupero dati
const updateSavedValue = function () {
  const savedName = localStorage.getItem(KEY)
  const savedValueDiv = document.getElementById("savedValue")
  if (savedName) {
    savedValueDiv.textContent = `Nome salvato: ${savedName}`
  } else {
    savedValueDiv.textContent = ""
  }
}

// al caricamento della pagina, verifico
updateSavedValue()

//var varie
const form = document.getElementById("form")
const saveButton = document.getElementById("saveBtn")
const removeButton = document.getElementById("removeBtn")

//salva
saveButton.addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput").value.trim()
  if (nameInput) {
    localStorage.setItem(KEY, nameInput)
    updateSavedValue()
  }
  form.reset()
})

//elimina
removeButton.addEventListener("click", () => {
  localStorage.removeItem(KEY)
  updateSavedValue()
  form.reset()
})
