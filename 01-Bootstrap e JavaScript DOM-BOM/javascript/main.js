const element = document.getElementById('intro');
document.getElementById('demo').innerHTML = `TEXTO: ${element.innerHTML}`;
//-------------------------------------
const element2 = document.getElementsByTagName('p');
document.getElementById('demo2').innerHTML = `TEXTO: ${element2[3].innerHTML}`;
//-------------------------------------

const x = document.getElementById('main');
const y = x.getElementsByTagName('p');

console.log('chega aq')
document.getElementById('demo3').innerHTML = `TEXTOS: ${y[1].innerHTML}.` 


//-------------------------------------