// ------------------------------------------- CARROSEL ------------------------------------------- //

let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);
startSlideTimer();

// Controle de próximo/anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
    resetSlideTimer();
}

// Controle de imagem através das bolinhas
function currentSlide(n) {
    showSlides(slideIndex = n);
    resetSlideTimer();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-imagens");
    let bolinhas = document.getElementsByClassName("bolinha");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    // Oculta todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove a classe "active" de todas as bolinhas
    for (i = 0; i < bolinhas.length; i++) {
        bolinhas[i].className = bolinhas[i].className.replace(" active", "");
    }
    
    // Exibe o slide atual e destaca a bolinha correspondente
    slides[slideIndex - 1].style.display = "block";
    bolinhas[slideIndex - 1].className += " active";
}

// Inicia o intervalo para transição automática de slides
function startSlideTimer() {
    slideInterval = setInterval(() => {
        showSlides(slideIndex += 1);
    }, 5000); // 5000 milissegundos = 5 segundos
}

// Reseta o temporizador
function resetSlideTimer() {
    clearInterval(slideInterval);
    startSlideTimer();
}

// ------------------------------------------- DESTAQUES ------------------------------------------- //

let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid => {
    vid.onclick = () => {
        videoList.forEach(remove => { remove.classList.remove('active') });
        vid.classList.add('active');
        let src = vid.getAttribute('data-video'); // Pega a URL do vídeo do atributo data-video
        let title = vid.querySelector('.list-title').innerHTML;
        document.querySelector('.main-video-container .main-video').src = src;
        document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
    };
});



