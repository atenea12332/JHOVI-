const no = document.querySelector("#no");
const si = document.querySelector("#si");
const mensaje = document.querySelector("#mensaje");

function randomF() {
    const posicionY = [75, 45, 30, 0, 15, 90, 60];
    const posicionX = [90, 75, 60, 45, 30, 0, 15];
    let aleatorioY = Math.floor(Math.random() * posicionY.length);
    let aleatorioX = Math.floor(Math.random() * posicionX.length);

    no.style.top = `${posicionY[aleatorioY]}%`;
    no.style.right = `${posicionX[aleatorioX]}%`;
}

function siMensaje() {
    mensaje.classList.remove("ocultar");
}

no.addEventListener("mousemove", randomF);
si.addEventListener("click", siMensaje);
