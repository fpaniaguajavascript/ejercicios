const RATIO = 1;
const VELOCIDAD = 0.5;
var y = -50;
var x = 200;

setInterval(() => {
    y += VELOCIDAD;
    x += VELOCIDAD;
    document.querySelector("#gato1").style.top = `${y}px`;
    document.querySelector("#gato1").style.left = `${x}px`;
    if (y > window.innerHeight) {
        y = -100;
        x = Math.random() * window.innerWidth;
    }
    if (x > window.innerWidth) {
        x = -100;
        y = Math.random() * window.innerHeight;
    }
}, RATIO);

document.querySelector("#bCerrar").addEventListener("click", () => {
    document.querySelector("footer").style.bottom = "-100px";
    document.querySelector("footer").style.opacity = 0;
});