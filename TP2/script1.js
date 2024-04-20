let index = 0; // Start index at 0

const moveTo = e => {
    showSlide(index = e);
};

const changeSlide = e => {
    showSlide(index += e);
};

const showSlide = e => {
    const images = document.querySelectorAll('.slider-item');
    const indicators = document.querySelectorAll('.slider-indicators span');
    const contents = document.querySelectorAll('.slider-content h3');

    if (e >= images.length) {
        index = 0; // Reset index to 0 if it exceeds the number of images
    } else if (e < 0) {
        index = images.length - 1; // Set index to the last image index if it goes below 0
    }

    for (let image of images) {
        image.style.opacity = '0';
    }
    for (let indicator of indicators) {
        indicator.style.width = '8px';
        indicator.style.background = '#ffffffaf';
    }
    for (let content of contents) {
        content.style.transform = 'scale(0)';
        content.style.opacity = '0';
        content.style.transitionDelay = '0.2s';
    }

    images[index].style.opacity = '1'; // Adjusted to use index directly
    indicators[index].style.width = '26px'; // Adjusted to use index directly
    indicators[index].style.background = '#fff'; // Adjusted to use index directly
    contents[index].style.transform = 'scale(1)'; // Adjusted to use index directly
    contents[index].style.opacity = '1'; // Adjusted to use index directly
};

showSlide(index); // calling showSlide with initial index
