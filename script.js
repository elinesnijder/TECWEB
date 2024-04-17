document.addEventListener("DOMContentLoaded", function() {
    var imgs = document.querySelectorAll(".slider img");
    var dots = document.querySelectorAll(".dot");
    var currentImg = 0; // Index of the first image
    const interval = 3000; // Interval for automatic slide change (3 seconds)
    var slideInterval; // Interval variable to hold setInterval reference

    function changeSlide(n) {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = 0;
            dots[i].classList.remove("active");
        }

        currentImg = n;

        imgs[currentImg].style.opacity = 1;
        dots[currentImg].classList.add("active");
    }

    // Function to change slide automatically
    function autoChangeSlide() {
        currentImg = (currentImg + 1) % imgs.length; // Move to the next image
        changeSlide(currentImg);
    }

    // Start the automatic slide change interval
    slideInterval = setInterval(autoChangeSlide, interval);

    // Attach event listeners to the dots
    dots.forEach(function(dot, index) {
        dot.addEventListener("click", function() {
            clearInterval(slideInterval); // Stop the automatic slide change when a dot is clicked
            changeSlide(index); // Change to the selected slide
            slideInterval = setInterval(autoChangeSlide, interval); // Restart the automatic slide change
        });
    });

    // Pause the automatic slide change when the mouse enters the slider area
    document.querySelector(".slider").addEventListener("mouseenter", function() {
        clearInterval(slideInterval);
    });

    // Resume the automatic slide change when the mouse leaves the slider area
    document.querySelector(".slider").addEventListener("mouseleave", function() {
        slideInterval = setInterval(autoChangeSlide, interval);
    });
});
