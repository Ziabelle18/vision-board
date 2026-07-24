// DreamCanvas - Version 2A Core Interactivity
document.addEventListener("DOMContentLoaded", () => {
    console.log("DreamCanvas V2A Loaded Successfully!");

    const cards = document.querySelectorAll('.card');

    // Simple interaction effect on card click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Slight tilt bounce animation feedback
            card.style.transform = "scale(0.98)";
            setTimeout(() => {
                card.style.transform = "";
            }, 150);
        });
    });
});
