// ==========================================
// 1. КОД ДЛЯ ТВОГО СЛАЙДЕРА (д)
// ==========================================
const cards = document.querySelectorAll('.card');
let index = 0;

function updateSlider() {
    cards.forEach((card, i) => {
        card.classList.remove('left', 'center', 'right');

        // центр
        if (i === index) {
            card.classList.add('center');
        }
        // ліва
        else if (i === (index - 1 + cards.length) % cards.length) {
            card.classList.add('left');
        }
        // права
        else if (i === (index + 1) % cards.length) {
            card.classList.add('right');
        }
    });
}

// Кнопки слайдера
document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % cards.length;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + cards.length) % cards.length;
    updateSlider();
});

// Старт слайдера
updateSlider();


// ==========================================
// 2. ДОДАТКОВИЙ КОД ДЛЯ БУРГЕР-МЕНЮ (Новий)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.nav_pop-up_menu');
    const navMenu = document.querySelector('.nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // Перемикаємо клас для відкриття/закриття сірої плашки
            navMenu.classList.toggle('open_nav');
        });
    }
});