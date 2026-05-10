let currentPasscode = "";
const correctPasscode = "1812"; 
const videoElement = document.getElementById('bg-video');

const pageVideos = {
    1: "image/passcode-bg.mp4.mp4",
    2: "image/surprise-bg.mp4.mp4",
    3: "image/cake-bg.mp4.mp4",
    4: "image/love-bg.mp4.mp4",
    5: "image/hbd-bg.mp4"
};

function enterDigit(digit) {
    if (currentPasscode.length < 4) {
        currentPasscode += digit;
        updateDisplay();
    }
    if (currentPasscode.length === 4) {
        if (currentPasscode === correctPasscode) {
            setTimeout(() => { goToPage(2); }, 500);
        } else {
            setTimeout(() => {
                alert("Wrong passcode! Try again.");
                currentPasscode = "";
                updateDisplay();
            }, 200);
        }
    }
}

function updateDisplay() {
    let displayStr = "";
    for (let i = 0; i < 4; i++) {
        displayStr += i < currentPasscode.length ? "★ " : "_ ";
    }
    document.getElementById('passcode-display').innerText = displayStr.trim();
}

function goToPage(pageNumber) {
    document.querySelector('.active').classList.remove('active');
    document.getElementById('page-' + pageNumber).classList.add('active');

    if (pageVideos[pageNumber]) {
        videoElement.src = pageVideos[pageNumber];
        videoElement.play();
    }
}

function moveButton() {
    const noBtn = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.max(20, x)}px`;
    noBtn.style.top = `${Math.max(20, y)}px`;
}

// ---- INTERSECTION OBSERVER FOR GALLERY SCROLL MAGIC ----
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.15 // Jab card 15% dikh jaye tab trigger hoga
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Agar tum chahte ho ki upar scroll karne pe wapas animation ho, 
                // toh isko enable rakhna, warna comment kar dena.
                entry.target.classList.remove('show'); 
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.photo-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});


// Function for seamless redirection in the SAME tab
function goToExternalCakeSite() {
    // 1. Loading screen ko show karo
    const loader = document.getElementById('fake-loader');
    loader.style.display = 'flex';
    
    // 2. 2.5 seconds (2500 ms) ka wait karo, fir same tab me website change kar do
    setTimeout(() => {
        window.location.href = "https://bdaycake.com/";
    }, 2500); 
}