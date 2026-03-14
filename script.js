// Scroll Reveal Animation Logic
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120; // How far down before it animates in

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Add event listener to scroll
window.addEventListener("scroll", reveal);

// Trigger the function once right away to show top elements
reveal();