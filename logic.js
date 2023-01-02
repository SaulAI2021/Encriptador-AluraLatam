var messagenotfound = document.getElementById('messageNotFound');
var foundMessage = document.getElementById('foundMessage');
var output = document.getElementById('output');

const encryptionlist = [
  {letter:'e', encript:'enter'},
  {letter:'o', encript:'ober'},
  {letter:'i', encript:'imes'},
  {letter:'a', encript:'ai'},
  {letter:'u', encript:'ufat'}
]

const cifrado = (txt , mode) =>{
  for (let i = 0; i < encryptionlist.length; i++) {
    if(mode == 1){
      let regx = new RegExp(`${encryptionlist[i].letter}`,'g');
      txt = txt.replace(regx,encryptionlist[i].encript);
    }else{
      let regx = new RegExp(`${encryptionlist[i].encript}`,'g');
      txt = txt.replace(regx,encryptionlist[i].letter);
    }
  }
  return txt;
};
function encrypted(){
  let input = document.getElementById('input').value.toLowerCase();
  output.value = cifrado(input,1);              
  messagenotfound.style.display = "none";
  foundMessage.style.removeProperty('display');
}

function decrypted(){
  let input = document.getElementById('input').value.toLowerCase();
  output.value = cifrado(input,2);            
}

function copy(){
  let copyText = document.getElementById('output');
  copyText.select();
  document.execCommand('copy');
}

setInterval(()=> {if(input.value == ''){
  foundMessage.style.display = "none";
  messagenotfound.style.removeProperty('display');
}}, 5000);