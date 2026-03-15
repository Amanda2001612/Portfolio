// 0. Page Loading Animation (Preloader) Logic
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // තත්පර 1.5ක් Animation එක පෙන්නලා ඉබේම අතුරුදහන් වෙනවා
    setTimeout(function() {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 1500);
});

// 1. Scroll Reveal & Scroll Progress Animation Logic
function handleScrollEvents() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var progressBar = document.getElementById("myBar");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
}

window.addEventListener("scroll", handleScrollEvents);
handleScrollEvents();

// 2. Creative Typewriter Animation Logic
const words = ["UI/UX Designer", "Business Analyst"];
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
        timer = setTimeout(loopTyping, 120); 
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
        timer = setTimeout(loopDeleting, 60); 
    };
    setTimeout(loopDeleting, 2000); 
};

document.addEventListener("DOMContentLoaded", function() {
    if(document.querySelector('.typewriter-text')) {
        typingEffect();
    }
});

// 3. 3D Tilt Effect for Project Cards
if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(document.querySelectorAll(".project-card"), {
        max: 12,           
        speed: 400,        
        glare: true,       
        "max-glare": 0.2,  
        scale: 1.03        
    });
}

// 4. Custom Animated Cursor Logic
const cursor = document.querySelector('.custom-cursor');

if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverElements = document.querySelectorAll('a, .btn-primary, .btn-secondary, .btn-outline, .project-card, .social-links a');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });
}