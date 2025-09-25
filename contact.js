// contact.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('unlock-form');
    const input = document.getElementById('key');
    const feedback = document.getElementById('feedback');
    const yr = document.getElementById('yr');
    if (yr) yr.textContent = new Date().getFullYear();

    // 🔑 Key
    const VALID_B64 = 'TWlkbmlnaHRTbmFjaw==';

    // 🎵 Video ID
    const RICK_ID = 'dQw4w9WgXcQ';

    function isValidKey(v) {
        try {
            return btoa(v) === VALID_B64;
        } catch {
            return false;
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const v = (input.value || '').trim();
        if (!v) {
            feedback.textContent = 'Please enter the key.';
            input.focus();
            return;
        }

        const cv = document.getElementById('cv');

        if (isValidKey(v)) {
            feedback.textContent = 'Congradulations, the key is correct. Enjoy ;)🎶';
            feedback.style.color = 'var(--success)';

            // YouTube embed z autoplay
            cv.innerHTML = `
        <div style="max-width:720px; aspect-ratio:16/9;">
          <iframe
            width="100%" height="100%"
            src="https://www.youtube.com/embed/${RICK_ID}?autoplay=1&rel=0&playsinline=1"
            title="Rick Astley - Never Gonna Give You Up"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>`;
            cv.classList.add('show');
        } else {
            cv.classList.remove('show');
            cv.innerHTML = '';
            feedback.textContent = 'Wrong key. Try again.';
            feedback.style.color = 'var(--error)';
        }
    });
});
