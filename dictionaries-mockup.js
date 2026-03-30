const wait = ms => new Promise(res => setTimeout(res, ms));

async function runDictsMockupAnimation() {
    const cursor = document.getElementById('dicts-cursor');
    const viewDicts = document.getElementById('view-dicts');
    const viewWords = document.getElementById('view-words');
    const overlay = document.getElementById('view-detail-overlay');

    const dictBtn = document.getElementById('mockup-dict-btn');
    const wordBtn = document.getElementById('mockup-word-btn');
    const closeBtn = document.getElementById('mockup-close-detail');
    const backBtn = document.getElementById('mockup-back-btn');

    cursor.style.transition = 'none';
    cursor.style.top = '450px';
    cursor.style.left = '450px';

    await wait(50);
    cursor.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';

    while (true) {
        viewDicts.className = 'mockup-view active';
        viewWords.className = 'mockup-view hidden-right';
        overlay.classList.remove('visible');
        dictBtn.classList.remove('mockup-hover');
        wordBtn.classList.remove('mockup-hover');
        closeBtn.classList.remove('mockup-hover');
        backBtn.classList.remove('mockup-hover');

        const detailBox = document.querySelector('.scrollable-box');
        if (detailBox) detailBox.scrollTop = 0;

        await wait(1000);

        cursor.style.top = '140px';
        cursor.style.left = '215px';

        await wait(350);
        dictBtn.classList.add('mockup-hover');

        await wait(250);
        await wait(200);

        cursor.style.transform = 'scale(0.8)';
        dictBtn.style.transform = 'scale(0.96)';
        await wait(150);
        cursor.style.transform = 'scale(1)';
        dictBtn.style.transform = '';
        dictBtn.classList.remove('mockup-hover');

        viewDicts.className = 'mockup-view hidden-left';
        viewWords.className = 'mockup-view active';

        await wait(300);

        wordBtn.classList.add('mockup-hover');

        await wait(500);

        cursor.style.transform = 'scale(0.8)';
        wordBtn.style.transform = 'scale(0.96)';
        await wait(150);
        cursor.style.transform = 'scale(1)';
        wordBtn.style.transform = '';
        wordBtn.classList.remove('mockup-hover');

        overlay.classList.add('visible');

        cursor.style.top = '450px';
        cursor.style.left = '350px';

        await wait(1000);
        if (detailBox) {
            detailBox.scrollTo({ top: 250, behavior: 'smooth' });
            await wait(1500);
            detailBox.scrollTo({ top: 0, behavior: 'smooth' });
            await wait(600);
        } else {
            await wait(3100);
        }

        cursor.style.top = '70px';
        cursor.style.left = '375px';

        await wait(450);
        closeBtn.classList.add('mockup-hover');

        await wait(150);
        await wait(200);

        cursor.style.transform = 'scale(0.8)';
        closeBtn.style.transform = 'scale(0.9)';
        await wait(150);
        cursor.style.transform = 'scale(1)';
        closeBtn.style.transform = '';
        closeBtn.classList.remove('mockup-hover');

        overlay.classList.remove('visible');
        await wait(300);

        cursor.style.top = '35px';
        cursor.style.left = '35px';

        await wait(450);
        backBtn.classList.add('mockup-hover');

        await wait(150);
        await wait(200);

        cursor.style.transform = 'scale(0.8)';
        backBtn.style.transform = 'scale(0.9)';
        await wait(150);
        cursor.style.transform = 'scale(1)';
        backBtn.style.transform = '';
        backBtn.classList.remove('mockup-hover');

        viewWords.className = 'mockup-view hidden-right';
        viewDicts.className = 'mockup-view active';

        cursor.style.top = '450px';
        cursor.style.left = '450px';
        await wait(1500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    runDictsMockupAnimation();
});