// 1. Scroll Reveal Animation Logic
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

// 2. Creative Typewriter Animation Logic
const words = ["UI/UX Designer","Business Analyst"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typewriter-text').innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 120); // Typing speed
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typewriter-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 60); // Deleting speed
    };
    setTimeout(loopDeleting, 2000); // Wait time before it starts deleting
};

// Start typing effect when the page loads
document.addEventListener("DOMContentLoaded", function() {
    if(document.querySelector('.typewriter-text')) {
        typingEffect();
    }
});