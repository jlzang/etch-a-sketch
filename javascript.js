
const container = document.querySelector('#container');

let defaultDivs;

for (let i = 0; i < 16; i++) {
    defaultDivs = document.createElement('div');
    defaultDivs.classList.add('div');
    container.appendChild(defaultDivs);
}

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
    if (isNaN(newGrid) || newGrid < 1 || newGrid > 100) {
        alert("Invalid input, please try again!");
        return;
    };
    if (container.contains(defaultDivs)) {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
    }

})

/*function createGridRow(num) {
    for (let i = 0; i < num; i++) {
        newDivs = document.createElement('div');
        newDivs.classList.add('div');
        container.appendChild(newDivs);

    }
}
function createNewGrid(num) {

}*/
