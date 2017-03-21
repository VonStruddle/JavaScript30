function toggleKey(e) {
    const key = document.querySelector(`div[data-key="${e.which}"]`);
    const audio = document.querySelector(`audio[data-key="${e.which}"]`);

    if (!audio) {
        return null;
    }

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    key.addEventListener('transitionend', removeStyling);
}

function removeStyling(e) {
    if (e.propertyName !== 'transform') {
        return null;
    }

    this.classList.remove('playing');
}

const keys = document.getElementsByClassName('keys')[0].children;
keys.forEach(addEventListener('keydown', toggleKey));
