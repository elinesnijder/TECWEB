document.addEventListener("DOMContentLoaded", function() {
    const setCookie = (cName, cValue, expdays) => {
        const date = new Date();
        date.setTime(date.getTime() + (expdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
        console.log("Cookie definido:", cName, cValue); // Exibe uma mensagem no console quando o cookie é definido
        updateStorage(); // Atualiza o armazenamento após definir o cookie
    }

    const getCookie = (cName) => {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie);
        const cArr = cDecoded.split("; ");
        let value;
        cArr.forEach(val => {
            if(val.indexOf(name) === 0) value = val.substring(name.length);
        })
        return value;
    }

    const updateStorage = () => {
        localStorage.setItem('capturedCookies', document.cookie); // Armazena os cookies capturados no localStorage
        console.log("Cookies capturados:", document.cookie); // Exibe os cookies capturados no console
    }

    const cookies = document.getElementById("cookies");
    const cookiesBtn = document.getElementById("cookies-btn");

    cookiesBtn.addEventListener("click", function() {
        setCookie("cookieConsent", "accepted", 30); // Define o cookie como aceito por 30 dias
        cookies.style.display = "none"; // Esconde a caixa de cookies após aceitar
    });

    // Verifica se o cookie de consentimento já foi aceito
    if (getCookie("cookieConsent") === "accepted") {
        cookies.style.display = "none"; // Esconde a caixa de cookies se já foi aceito
    }
});

let index = 0; // Start index at 0

const moveTo = e => {
    showSlide(index = e);
};

const changeSlide = e => {
    showSlide(index += e);
};

// Função para exibir o slide correto
const showSlide = e => {
    const images = document.querySelectorAll('.slider-item');
    const indicators = document.querySelectorAll('.slider-indicators span');
    const contents = document.querySelectorAll('.slider-content h3');

    // Se o índice for maior que o número de imagens, resete para 0
    if (e >= images.length) {
        index = 0;
    } 
    // Se o índice for menor que 0, defina como o índice da última imagem
    else if (e < 0) {
        index = images.length - 1;
    }

    // Loop por todas as imagens
    for (let i = 0; i < images.length; i++) {
        // Se a imagem atual é a imagem ativa
        if (i === index) {
            images[i].style.opacity = '1';
            images[i].style.visibility = 'visible'; // Torna a imagem ativa visível
            indicators[i].style.width = '26px';
            indicators[i].style.background = '#fff';
            contents[i].style.transform = 'scale(1)';
            contents[i].style.opacity = '1';
        } 
        // Se a imagem atual não é a imagem ativa
        else {
            images[i].style.opacity = '0';
            images[i].style.visibility = 'hidden'; // Esconde as imagens não ativas
            indicators[i].style.width = '8px';
            indicators[i].style.background = '#ffffffaf';
            contents[i].style.transform = 'scale(0)';
            contents[i].style.opacity = '0';
            contents[i].style.transitionDelay = '0.2s';
        }
    }
};

// Define o intervalo de tempo para 2 segundos (2000 milissegundos)
const intervalTime = 4000;

// Função para avançar automaticamente os slides a cada 2 segundos
const autoSlide = () => {
    setInterval(() => {
        changeSlide(1); // Avança para o próximo slide
    }, intervalTime);
};

// Inicia a função para avançar automaticamente os slides
autoSlide();

// Mostra o primeiro slide ao carregar a página
showSlide(index);

