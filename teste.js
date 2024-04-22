let slideIndex = 0;
let slides = document.getElementsByClassName("slider-item");
let dots = document.querySelectorAll(".slider-indicators span");


function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function moveTo(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    slides[n].style.display = "block";
    dots[n].classList.add("active");
    
    // Adiciona a exibição do texto correspondente ao slide atual
    let texts = document.querySelectorAll('.slider-content h3');
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.display = "none";
    }
    let textToShow = document.getElementById('sliderContent' + (n + 1)); // Corrigido para corresponder ao índice das imagens
    if (textToShow) {
        textToShow.style.display = "block";
    }
}


// Inicializa o carrossel
showSlide(slideIndex);

// Manipulador de evento para alterar o texto no slider
document.getElementById("textInputForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    var selectedOption = document.getElementById("textOption").value;
    var newSliderText = document.getElementById("sliderText").value;
    document.getElementById(selectedOption).innerText = newSliderText;
    });
           