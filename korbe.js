const csiga = document.querySelector("#csiga");
var maxX = window.innerWidth - csiga.offsetWidth;
var maxY = window.innerHeight - csiga.offsetHeight;
var irany = 0;
var aktX = 0, aktY = 0;

function mozgat() {
    switch (irany) {
        case 0:
            if (aktX < maxX) {
                aktX += 1;
            } else {
                irany = 1;
            }
            break;

        case 1:
            if (aktY < maxY) {
                aktY += 1;
            } else {
                irany = 2;
            }
            break;

        case 2:
            if (aktX > 0) {
                aktX -= 1;
            } else {
                irany = 3;
            }
            break;

        case 3:
            if (aktY > 0) {
                aktY -= 1;
            } else {
                irany = 0;
            }
            break;

        default:
            break;
    }
    console.log(aktX,aktY);
    csiga.style.left = parseInt(aktX).toString() + "px";
    csiga.style.top = parseInt(aktY).toString() + "px";
}
setInterval(mozgat, 1);