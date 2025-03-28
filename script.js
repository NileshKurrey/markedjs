
let inputText = document.getElementById('inputText')
let OutputSection = document.getElementById('OutputSection')



function Inputparse(text){
    let textArr = text.split('\n')
    textArr.forEach(text => {
        let textEl = String(text)
        if(textEl.startsWith('#')){
            
        }
    });
    // console.log(textArr)
}
function input(){
  let inputValue = String(inputText.value)
  Inputparse(inputValue)
//   OutputSection.innerHTML = marked.parse(inputValue) +'\n'
}
