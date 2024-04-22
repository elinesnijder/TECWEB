$(document).ready(function() {
    // Function to handle form submission
    $('#textInputForm').submit(function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Get the selected text option and the new text from the form
        var selectedText = $('#textOption').val();
        var newText = $('#sliderText').val();
        
        // AJAX POST request to send the data to the server
        $.ajax({
            type: 'POST',
            url: 'inserir.php', // Replace 'update_text.php' with the URL of your server-side script
            data: { textOption: selectedText, newText: newText },
            success: function(response) {
                // Handle successful response (if needed)
                console.log('Text updated successfully!');
            },
            error: function(xhr, status, error) {
                // Handle errors (if any)
                console.error('Error:', error);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const setCookie = (cName, cValue, expdays) => {
        const date = new Date();
        date.setTime(date.getTime() + (expdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
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

// Chama a função showSlide com o índice inicial
showSlide(index);

// Manipulador de evento para alterar o texto no slider
document.getElementById("textInputForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    var selectedOption = document.getElementById("textOption").value;
    var newSliderText = document.getElementById("sliderText").value;
    document.getElementById(selectedOption).innerText = newSliderText;
    });
           