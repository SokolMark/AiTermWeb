// Плавная прокрутка для якорных ссылок на сайте-визитке
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Логика появления верхней панели при прокрутке вниз
const header = document.getElementById('main-header');
const heroSection = document.querySelector('.hero-section');

window.addEventListener('scroll', () => {
    // Получаем высоту первого экрана (Hero)
    const heroHeight = heroSection.offsetHeight;

    // Если пользователь проскроллил почти весь первый экран (оставили запас 100px)
    if (window.scrollY > heroHeight - 100) {
        header.classList.add('header-visible');
    } else {
        header.classList.remove('header-visible');
    }
});

// ============================================
// Эффект "Магнитного притяжения" для главной кнопки
// ============================================
const magneticBtn = document.getElementById('magnetic-btn');

if (magneticBtn) {
    const btnText = magneticBtn.querySelector('.btn-text');

    magneticBtn.addEventListener('mousemove', (e) => {
        // Получаем координаты и размеры кнопки
        const rect = magneticBtn.getBoundingClientRect();

        // Вычисляем, насколько далеко курсор от центра кнопки
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Сдвигаем кнопку (умножаем на 0.3, чтобы она не улетала слишком далеко)
        magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;

        // Сдвигаем текст с другим коэффициентом (0.15) для эффекта 3D-параллакса
        if (btnText) {
            btnText.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        }
    });

    magneticBtn.addEventListener('mouseleave', () => {
        // Когда курсор уходит, возвращаем все точно в центр
        magneticBtn.style.transform = `translate(0px, 0px)`;
        if (btnText) {
            btnText.style.transform = `translate(0px, 0px)`;
        }
    });
}