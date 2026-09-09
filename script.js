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


const fechaInicio = new Date("2023-12-15");

function actualizarContador() {

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const años = Math.floor(dias / 365);

    const meses = Math.floor((dias % 365) / 30);

    const diasRestantes = (dias % 365) % 30;

    document.getElementById("tiempo-juntos").innerHTML = `
        ❤️ ${años} años, ${meses} meses y ${diasRestantes} días ❤️
    `;
}

actualizarContador();

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

}