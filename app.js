const valores = ['1','2','3','4','5','6','7','8','9','J','Q','K','A'];
const pintas =['♦','♥','♠','♣']
const azar = () =>{
    let valor = valores[Math.floor(Math.random()*valores.length)];
    return valor;
}
const azar2 = () =>{
    let valor1 = pintas[Math.floor(Math.random()*pintas.length)];
    return valor1;
}
const pinta = azar2(pintas);
const pintahtml = document.getElementsByClassName('pinta')
const valorhtml = document.getElementById('numero')



for (var i = 0; i < pintahtml.length; i++) {
    pintahtml[i].textContent = pinta;
    if (pintahtml[i].textContent === ('♥' || '♦') ){
        pintahtml[i].style.color = 'red';
        valorhtml.style.color = 'red'
    }
    else{
         valorhtml.style.color = 'black'
    }
}



valorhtml.innerText= azar(valores);
pintahtml.innerText= azar2(pintahtml)


