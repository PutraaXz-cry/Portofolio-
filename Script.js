// Modal Logic
const modal = document.getElementById("contactModal");
const triggers = document.querySelectorAll(".contact-trigger");
const closeBtn = document.querySelector(".close-btn");

triggers.forEach(trigger => {
    trigger.onclick = () => modal.style.display = "flex";
});

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};

// Scroll 
const reveal = () => {
    const elements = document.querySelectorAll(".reveal");
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("active");
    });
};

window.addEventListener("scroll", reveal);
window.onload = reveal;
