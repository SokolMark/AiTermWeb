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

const header = document.getElementById('main-header');
const heroSection = document.querySelector('.hero-section');

window.addEventListener('scroll', () => {
    // Получаем высоту первого экрана (Hero)
    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > heroHeight - 100) {
        header.classList.add('header-visible');
    } else {
        header.classList.remove('header-visible');
    }
});

const magneticBtn = document.getElementById('magnetic-btn');

if (magneticBtn) {
    const btnText = magneticBtn.querySelector('.btn-text');

    magneticBtn.addEventListener('mousemove', (e) => {
        // Отключаем магнитный эффект для мобильных устройств
        if (window.innerWidth <= 768) {
            magneticBtn.style.transform = '';
            if (btnText) btnText.style.transform = '';
            return;
        }

        const rect = magneticBtn.getBoundingClientRect();

        // Вычисляем, насколько далеко курсор от центра кнопки
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;

        if (btnText) {
            btnText.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        }
    });

    magneticBtn.addEventListener('mouseleave', () => {
        if (window.innerWidth <= 768) {
            magneticBtn.style.transform = '';
            if (btnText) btnText.style.transform = '';
            return;
        }

        // Когда курсор уходит, возвращаем все точно в центр
        magneticBtn.style.transform = `translate(0px, 0px)`;
        if (btnText) {
            btnText.style.transform = `translate(0px, 0px)`;
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            magneticBtn.style.transform = '';
            if (btnText) btnText.style.transform = '';
        }
    });
}