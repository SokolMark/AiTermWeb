document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById('mini-cursor');
    const highlightWord = document.getElementById('mini-highlight');
    const popup = document.getElementById('mini-popup');
    const translateBtn = document.getElementById('mini-translate-btn');
    const targetText = document.getElementById('mini-target-text');
    const arrow = document.getElementById('mini-arrow');

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function runMiniMockupAnimation() {
        // Начальная позиция слева внизу
        cursor.style.transform = 'translateZ(90px) translate(50px, 350px)';

        while (true) {
            // 1. Возврат в исходную точку
            cursor.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
            cursor.style.transform = 'translateZ(90px) translate(50px, 350px)';

            // Сброс всех элементов
            highlightWord.style.backgroundColor = 'transparent';
            highlightWord.style.color = 'inherit';
            popup.style.transition = 'none';
            popup.style.opacity = '0';
            popup.style.transform = 'translateZ(60px) translateY(10px) scale(0.95)';
            targetText.textContent = '...';
            targetText.style.color = '#3d4260';
            arrow.classList.remove('aiterm-tremble');

            // Сброс кнопки
            translateBtn.style.background = '#f0f2f7';
            translateBtn.style.color = '#3d4260';
            translateBtn.style.transform = 'none';
            translateBtn.style.boxShadow = 'none';
            translateBtn.style.border = '1.5px solid transparent';

            await wait(1200);

            // 2. Наводимся точно на слово "vibe"
            cursor.style.transition = 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
            cursor.style.transform = 'translateZ(90px) translate(325px, 125px)';
            await wait(900);

            // 3. Выделение текста
            highlightWord.style.backgroundColor = '#3390FF';
            highlightWord.style.color = '#ffffff';
            await wait(500);

            // 4. Появляется большое мини-окно
            popup.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            popup.style.opacity = '1';
            popup.style.transform = 'translateZ(60px) translateY(0) scale(1)';
            await wait(700);

            // 5. Двигаем курсор к кнопке "Translate"
            cursor.style.transition = 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)';
            cursor.style.transform = 'translateZ(90px) translate(250px, 350px)';

            // Ожидаем РОВНО то время, за которое курсор доедет до кнопки (700мс)
            await wait(700);

            // 6. Как только курсор прибыл — СРАЗУ появляется эффект наведения (отклик)
            translateBtn.style.transition = 'all 0.2s ease';
            translateBtn.style.background = 'linear-gradient(135deg, rgba(74, 144, 226, 0.08), rgba(99, 102, 241, 0.08))';
            translateBtn.style.border = '1.5px solid #4a90e2'; // Контур появляется
            translateBtn.style.color = '#4a90e2';
            translateBtn.style.boxShadow = '0 2px 12px rgba(74, 144, 226, 0.15)';

            // Пауза перед кликом, чтобы пользователь увидел ховер
            await wait(300);

            // 7. Клик по кнопке (контур увеличивается, кнопка немного прожимается)
            cursor.style.transform = 'translateZ(90px) translate(250px, 350px) scale(0.9)';
            translateBtn.style.transform = 'translateY(0) scale(0.96)';
            translateBtn.style.border = '2.5px solid #4a90e2'; // Контур утолщается при клике
            translateBtn.style.boxShadow = '0 1px 4px rgba(74, 144, 226, 0.1)';
            await wait(150);

            // Отпускаем клик
            cursor.style.transform = 'translateZ(90px) translate(250px, 350px) scale(1)';
            translateBtn.style.transform = 'none';
            translateBtn.style.border = '1.5px solid #4a90e2'; // Контур возвращается в норму
            translateBtn.style.boxShadow = '0 2px 12px rgba(74, 144, 226, 0.15)';

            // 8. Режим загрузки перевода
            targetText.textContent = 'Loading...';
            arrow.classList.add('aiterm-tremble');

            // Курсор улетает вправо
            cursor.style.transition = 'transform 0.8s ease';
            cursor.style.transform = 'translateZ(90px) translate(430px, 380px)';
            await wait(1200);

            // 9. Результат перевода (Испанский)
            targetText.textContent = 'Vibra';
            arrow.classList.remove('aiterm-tremble');
            await wait(3500);

            // 10. Исчезновение окна
            popup.style.transition = 'all 0.4s ease';
            popup.style.opacity = '0';
            popup.style.transform = 'translateZ(60px) translateY(10px) scale(0.95)';
            highlightWord.style.backgroundColor = 'transparent';
            highlightWord.style.color = 'inherit';

            await wait(600);
        }
    }

    // Запуск анимации
    runMiniMockupAnimation();
});