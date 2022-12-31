var messagenotfound = document.getElementById('messageNotFound');
var foundMessage = document.getElementById('foundMessage');
var output = document.getElementById('output');
var input = document.getElementById('input');

const vocals = ['a','e','i','o','u'];
const encript = ['ai','enter','imes','ober','ufat'];
function encriptar(){
  let input = document.getElementById('input').value.toLowerCase();
  var encriptado = input.replace(/e/g,encript[1])
                        .replace(/o/g,encript[3])
                        .replace(/i/g,encript[2])
                        .replace(/a/g,encript[0])
                        .replace(/u/g,encript[4]);
  output.value = encriptado;              
  messagenotfound.style.display = "none";
  foundMessage.style.removeProperty('display');
}

function desencriptar(){
  let input = document.getElementById('input').value.toLowerCase();
  var desencriptado = input.replace(/enter/g,vocals[1])
                           .replace(/ober/g,vocals[3])
                           .replace(/imes/g,vocals[2])
                           .replace(/ai/g,vocals[0])
                           .replace(/ufat/.global,vocals[4]);
  output.value = desencriptado;            
}

function copy(){
  let copyText = document.getElementById('output');
  copyText.select();
  document.execCommand('copy');
}

setInterval(function () {if(input.value == ''){
  foundMessage.style.display = "none";
  messagenotfound.style.removeProperty('display');
}}, 1000);