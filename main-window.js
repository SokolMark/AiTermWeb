// main-window.js
const delay = ms => new Promise(res => setTimeout(res, ms));

async function runExactMockupAnimation() {
    const cursor = document.getElementById('mockup-cursor');
    const translateBtn = document.getElementById('mockup-btn');
    const swapBtn = document.getElementById('mockup-swap');
    const outputText = document.getElementById('mockup-output');

    const levelInd = document.getElementById('mockup-level');
    const donutFill = document.getElementById('mockup-donut');
    const donutText = document.getElementById('mockup-donut-text');

    const rightArrow = document.getElementById('mockup-right-arrow');

    const track = document.getElementById('mockup-track');
    const slides = [document.getElementById('slide-0'), document.getElementById('slide-1'), document.getElementById('slide-2')];
    const contents = [document.getElementById('content-0'), document.getElementById('content-1'), document.getElementById('content-2')];
    const dots = document.getElementById('mockup-dots').children;
    const titles = document.getElementById('title-container').children;

    const donutCircumference = 188.496;

    cursor.style.transition = 'none';
    cursor.style.top = '300px';
    cursor.style.left = '450px';

    await delay(50);
    cursor.style.transition = '';

    while (true) {
        outputText.value = '';
        levelInd.innerHTML = '<span class="level-text-anim">?</span>';
        donutText.textContent = '1';
        donutFill.style.strokeDashoffset = donutCircumference;

        contents.forEach(c => { c.classList.remove('ready'); c.innerHTML = ''; });
        swapBtn.classList.remove('cancel-mode');
        translateBtn.classList.remove('mockup-hover');

        rightArrow.classList.remove('mockup-hover-arrow');
        rightArrow.style.transform = '';

        swapBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10L3 14L7 18"/><path d="M21 14H3"/><path d="M17 4L21 8L17 12"/><path d="M3 8H21"/></svg>';

        translateBtn.disabled = false;

        setTab(0, track, slides, dots, titles);

        await delay(1000);

        cursor.style.top = '165px';
        cursor.style.left = '210px';

        await delay(350);

        translateBtn.classList.add('mockup-hover');

        await delay(250);

        cursor.style.transform = 'scale(0.8)';

        translateBtn.style.transform = 'scale(0.96)';
        await delay(150);
        cursor.style.transform = 'scale(1)';
        translateBtn.style.transform = '';

        translateBtn.classList.remove('mockup-hover');
        translateBtn.disabled = true;

        swapBtn.classList.add('cancel-mode');
        swapBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

        cursor.style.top = '150px';
        cursor.style.left = '450px';
        await delay(1200);

        translateBtn.disabled = false;

        swapBtn.classList.remove('cancel-mode');
        swapBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10L3 14L7 18"/><path d="M21 14H3"/><path d="M17 4L21 8L17 12"/><path d="M3 8H21"/></svg>';

        outputText.value = 'Vibra';

        const levels = ['A1', 'A2', 'B1'];
        for (let i = 0; i < levels.length; i++) {
            levelInd.innerHTML = `<span class="level-text-anim">${levels[i]}</span>`;
            await delay(300);
        }

        let targetPercent = 85;
        let offset = donutCircumference - (targetPercent / 100) * donutCircumference;
        donutFill.style.strokeDashoffset = offset;

        for(let i = 1; i <= 8; i++) {
            donutText.textContent = i;
            await delay(100);
        }

        await delay(300);

        contents[0].innerHTML = `<div class="content-fade-wrapper"><div class="list-item">La vibra en esta habitación es increíble.</div><div class="list-item">No me gustó la vibra de ese lugar.</div><div class="list-item">Ella siempre transmite una vibra muy positiva y relajada.</div><div class="list-item">El concierto de anoche tuvo una vibra mágica.</div></div>`;
        contents[0].classList.add('ready');

        await delay(800);

        cursor.style.top = '388px';
        cursor.style.left = '245px';

        await delay(400);

        rightArrow.classList.add('mockup-hover-arrow');
        await delay(900);

        cursor.style.transform = 'scale(0.8)';
        rightArrow.style.transform = 'scale(0.85)';
        await delay(150);
        cursor.style.transform = 'scale(1)';
        rightArrow.style.transform = 'scale(1)';

        setTab(1, track, slides, dots, titles);
        contents[1].innerHTML = `<div class="content-fade-wrapper"><div class="list-item">ambiente</div><div class="list-item">energía</div><div class="list-item">aura</div><div class="list-item">sensación</div></div>`;
        contents[1].classList.add('ready');
        await delay(2000);

        cursor.style.transform = 'scale(0.8)';
        rightArrow.style.transform = 'scale(0.85)';
        await delay(150);
        cursor.style.transform = 'scale(1)';
        rightArrow.style.transform = 'scale(1)';

        setTab(2, track, slides, dots, titles);
        contents[2].innerHTML = `<div class="content-fade-wrapper">El estado emocional, la atmósfera o la energía que transmite y crea un lugar, una persona o una cosa en particular. Esta palabra se utiliza frecuentemente para describir la intuición o el sentimiento inicial que se tiene al conocer a alguien. También puede referirse a la tendencia general de una situación o entorno.</div>`;
        contents[2].classList.add('ready');

        await delay(3000);

        rightArrow.classList.remove('mockup-hover-arrow');
        cursor.style.top = '300px';
        cursor.style.left = '450px';
        await delay(800);
    }
}

function setTab(index, track, slides, dots, titles) {
    track.className = `carousel-track tab-${index}`;

    slides.forEach((s, i) => {
        if (i === index) s.classList.add('active-slide');
        else s.classList.remove('active-slide');
    });

    Array.from(dots).forEach((d, i) => {
        if (i === index) d.classList.add('active');
        else d.classList.remove('active');
    });

    Array.from(titles).forEach((t, i) => {
        if (i === index) t.classList.add('active');
        else t.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    runExactMockupAnimation();
});