
let inputText = document.getElementById('inputText')
let OutputSection = document.getElementById('OutputSection')



function input(){
  let inputValue = String(inputText.value)
  OutputSection.innerHTML = marked.parse(inputValue) +'\n'
}
