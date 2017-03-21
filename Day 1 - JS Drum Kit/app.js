const keys = document.getElementsByClassName('keys')[0].children;
console.log(keys);

keys[0].onClick(addAnimation(keys[0]));

function addAnimation(key) {
    key.classList.toggle('playing');
}
