const results = document.getElementById("results-div")
const check = document.getElementById("check-btn")
const clear = document.getElementById("clear-btn")
const input = document.getElementById("user-input")

check.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please provide a phone number")
  }

  if (checkPhone()) {
    results.innerText = `Valid US number: ${input.value}`
  } else {
    results.innerText = `Invalid US number: ${input.value}`
  }

})

clear.addEventListener("click", () => {
  input.value = ""
  results.innerText = ""
})

function checkPhone () {
  const regex = /^[1]?[-\s]?[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/
  const regex2 = /^[1]?[-\s]?[(][0-9]{3}[)][-\s]?[0-9]{3}[-\s]?[0-9]{4}$/
  if (input.value.includes("(", 0) && input.value.includes(")", 0)) {
    return regex2.test(input.value)
  } else {
    return regex.test(input.value)
  }
}