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