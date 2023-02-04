const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form;addEventListener("change", save)

 
function add () {
  // alert('hello world')
  
  const today = new Date().toLocaleDateString('pt-BR').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    alert("dia ja incluso ❌")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
  
}

function save() {
   localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
   localStorage.getItem("NLWSetup@habits")
   JSON.parse(localStorage.getItem("NLWSetup@habits"))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))
nlwSetup.setData(data)
nlwSetup.load()