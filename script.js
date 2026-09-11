function abrirCarta(){

    document.getElementById("carta").scrollIntoView({
        behavior:"smooth"
    });

    const musica = document.getElementById("musica");

    if (musica) {
        musica.play();
    }

    crearConfeti();

}
const fechaInicio = new Date(2023, 11, 15);

function actualizarContador() {

    const hoy = new Date();

    let años = hoy.getFullYear() - fechaInicio.getFullYear();
    let meses = hoy.getMonth() - fechaInicio.getMonth();
    let dias = hoy.getDate() - fechaInicio.getDate();

    if (dias < 0) {
        meses--;

        const ultimoMes = new Date(
            hoy.getFullYear(),
            hoy.getMonth(),
            0
        );

        dias += ultimoMes.getDate();
    }

    if (meses < 0) {
        años--;
        meses += 12;
    }

    document.getElementById("tiempo-juntos").innerHTML =
        `❤️ ${años} años, ${meses} meses y ${dias} días ❤️`;
}

actualizarContador();
setInterval(actualizarContador, 1000);
setInterval(actualizarContador, 1000);
function volverInicio(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
function abrirFoto(imagen){

    const visor = document.getElementById("visor");
    const fotoGrande = document.getElementById("fotoGrande");

    fotoGrande.src = imagen.src;

    visor.style.display = "flex";
}

function cerrarFoto(){

    document.getElementById("visor").style.display = "none";

}
function crearConfeti(){

    for(let i = 0; i < 40; i++){

        const confeti = document.createElement("span");

        confeti.className = "confeti";

        confeti.innerHTML = "❤️";

        confeti.style.left = Math.random() * 100 + "vw";

        confeti.style.animationDelay = Math.random() * 2 + "s";

        confeti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        document.body.appendChild(confeti);

        setTimeout(() => {
            confeti.remove();
        }, 5000);

    }

}function abrirVideo(video){

    const modal = document.getElementById("modalVideo");
    const videoGrande = document.getElementById("videoGrande");

    videoGrande.src = video.querySelector("source").src;

    videoGrande.muted = true; // ← agrega esta línea

    modal.style.display = "flex";

    videoGrande.play();
}

function cerrarVideo(){

    const modal = document.getElementById("modalVideo");
    const videoGrande = document.getElementById("videoGrande");

    videoGrande.pause();

    modal.style.display = "none";
}
