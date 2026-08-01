// ===============================
// ELEMENTOS
// ===============================
const giftButton = document.getElementById("giftButton");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const contador = document.getElementById("timeTogether");
const loveButton = document.getElementById("loveButton");
const particles = document.getElementById("particles");
const musica = document.getElementById("musicaFondo"); // 🎵 Elemento de música

// ===============================
// INICIAR CORAZONES Y ESTRELLAS
// ===============================
// Inicia las partículas desde que carga la página
crearCorazonesYEstrellas();

// ===============================
// ABRIR REGALO Y REPRODUCIR MÚSICA
// ===============================
giftButton.addEventListener("click", () => {
    inicio.style.display = "none";
    contenido.classList.remove("hidden");

    // 🎵 Iniciar la canción "YOKO"
    if (musica) {
        musica.play().catch(error => {
            console.log("El navegador bloqueó la reproducción automática:", error);
        });
    }

    actualizarContador();
    lanzarConfeti();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// CONTADOR
// ===============================
function actualizarContador(){
    const inicioRelacion = new Date("2026-06-26T00:00:00");
    const hoy = new Date();
    const diferencia = hoy - inicioRelacion;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    if (contador) {
        contador.innerHTML = dias + " días juntos 💛";
    }
}

// ===============================
// CORAZONES Y ESTRELLAS AMARILLAS
// ===============================
function crearCorazonesYEstrellas(){
    const figuras = ["💛", "⭐", "✨", "🌟"]; // Mezcla de corazones y estrellas

    setInterval(()=>{
        if (!particles) return;

        const elemento = document.createElement("div");
        elemento.className = "heart";
        
        // Elige aleatoriamente una figura del arreglo
        elemento.innerHTML = figuras[Math.floor(Math.random() * figuras.length)];
        
        elemento.style.left = Math.random() * 100 + "vw";
        elemento.style.fontSize = (18 + Math.random() * 24) + "px";
        elemento.style.animationDuration = (5 + Math.random() * 5) + "s";

        particles.appendChild(elemento);

        setTimeout(()=>{
            elemento.remove();
        }, 10000);
    }, 250); // Sale una figura cada 250 milisegundos
}

// ===============================
// CONFETI
// ===============================
function lanzarConfeti(){
    const colores = [
        "#FFD54F",
        "#ffffff",
        "#c084fc",
        "#8b5cf6",
        "#f9a8d4"
    ];

    for(let i = 0; i < 180; i++){
        const confeti = document.createElement("div");
        confeti.style.position = "fixed";
        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.top = "-20px";
        confeti.style.width = "8px";
        confeti.style.height = "15px";
        confeti.style.background = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.borderRadius = "3px";
        confeti.style.zIndex = "999";
        confeti.style.transition = "all 4s linear";

        document.body.appendChild(confeti);

        setTimeout(()=>{
            confeti.style.transform =
            `translateY(${window.innerHeight + 100}px)
             rotate(${Math.random() * 720}deg)`;
        }, 50);

        setTimeout(()=>{
            confeti.remove();
        }, 4500);
    }
}

// ===============================
// MENSAJE FINAL
// ===============================
if (loveButton) {
    loveButton.addEventListener("click", ()=>{
        alert(`💛

Feliz cumpleaños mi amor.

Gracias por hacer mi vida mucho más bonita.

Espero seguir compartiendo muchos momentos contigo.

Nunca olvides lo especial que eres para mí.

Te amo muchísimo.

Con mucho amor,
Juan Pablo 💛`);
    });
}

// ===============================
// EFECTO DE APARICIÓN Y SLIDER
// ===============================
window.addEventListener("load", ()=>{
    document.body.style.opacity = "0";

    setTimeout(()=>{
        document.body.style.transition = "1.5s";
        document.body.style.opacity = "1";
    }, 200);

    // LÓGICA DEL CARRUSEL DE FOTOS
    const slides = document.querySelectorAll(".slide");
    let actual = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[actual].classList.remove("active");
            actual = (actual + 1) % slides.length;
            slides[actual].classList.add("active");
        }, 3000);
    }
});
