
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

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let newGrid = Number(prompt("Please enter a number 1-100."));
    if (isNaN(newGrid) || newGrid < 1 || newGrid > 100)
    alert("Invalid input, please try again!")
})

function createGridRow(num) {
    for (let i = 0; i < num; i++) {

    }
}
function createNewGrid(num) {

}
