const csiga=document.querySelector('#csiga');
const kijelzo = document.querySelector('#kijelzo')
const szelesseg=window.innerWidth;
const magassag=window.innerHeight;
console.log(szelesseg, magassag);


var szam=0;

function mozog() {
    
    
    
    kijelzo.innerHTML = szam.toString();
    szam += 1;
}

setInterval(mozog,1000);

