const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    let divs = document.createElement('div');
    divs.classList.add('div');
    container.appendChild(divs);
}

const divs = document.querySelector('.div');

container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = randomHsl();
})

function randomHue() {
return Math.floor(Math.random() * 360);
}

function randomSaturation(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomLightness(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomHsl() {
    let h = randomHue();
    let s = randomSaturation(50, 80);
    let l = randomLightness(40, 60);
    return `hsl(${h}, ${s}%, ${l}%)`;
}
console.log(randomHsl())