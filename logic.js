var messagenotfound = document.getElementById('messageNotFound');
var foundMessage = document.getElementById('foundMessage');
var output = document.getElementById('output');

const listEncript = [
  {letter:'e', encript:'enter'},
  {letter:'o', encript:'ober'},
  {letter:'i', encript:'imes'},
  {letter:'a', encript:'ai'},
  {letter:'u', encript:'ufat'}
]

const encriptacion = (txt , mode) =>{
  for (let i = 0; i < listEncript.length; i++) {
    if(mode == 1){
      let regx = new RegExp(`${listEncript[i].letter}`,'g');
      txt = txt.replace(regx,listEncript[i].encript);
    }else{
      let regx = new RegExp(`${listEncript[i].encript}`,'g');
      txt = txt.replace(regx,listEncript[i].letter);
    }
  }
  return txt;
};
function encriptar(){
  let input = document.getElementById('input').value.toLowerCase();
  output.value = encriptacion(input,1);              
  messagenotfound.style.display = "none";
  foundMessage.style.removeProperty('display');
}

function desencriptar(){
  let input = document.getElementById('input').value.toLowerCase();
  output.value = encriptacion(input,2);            
}

function copy(){
  let copyText = document.getElementById('output');
  copyText.select();
  document.execCommand('copy');
}

setInterval(()=> {if(input.value == ''){
  foundMessage.style.display = "none";
  messagenotfound.style.removeProperty('display');
}}, 1000);