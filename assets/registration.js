const KEY = "nomeUtente"

const updateSavedValue = function () {
  const savedName = localStorage.getItem(KEY)
  const savedValueDiv = document.getElementById("savedValue")
  if (savedName) {
    savedValueDiv.textContent = `Nome salvato: ${savedName}`
  } else {
    savedValueDiv.textContent = ""
  }
}

// Controlla se ci sono nomi salvati all'apertura della pagina
updateSavedValue()
const form = document.getElementById("form")

const saveButton = document.getElementById("saveBtn")

saveButton.addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput").value.trim()
  if (nameInput) {
    localStorage.setItem(KEY, nameInput)
    updateSavedValue()
  }
  form.reset()
})

const removeButton = document.getElementById("removeBtn")
removeButton.addEventListener("click", () => {
  localStorage.removeItem(KEY)
  updateSavedValue()
  form.reset()
})
