const racer = document.querySelector('.racer');

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if(e.key == 'ArrowRight') {
        console.log(racer.scrollLeft);
        racer.style.left += (100 + 'px');
    }
});