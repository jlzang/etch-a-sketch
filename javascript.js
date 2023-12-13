
const container = document.querySelector('#container');

let defaultSquares;

for (let i = 0; i < 256; i++) {
    defaultSquares = document.createElement('div');
    defaultSquares.classList.add('div');
    container.appendChild(defaultSquares);
    defaultSquares.style.width = "31.25px";
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
    let s = randomSaturation(80, 90);
    let l = randomLightness(60, 80);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let numberOfSquares = Number(prompt("Please enter a number 1-100."));
    if (isNaN(numberOfSquares) || numberOfSquares < 1 || numberOfSquares > 100) {
        alert("Invalid input, please try again!");
        return;
    };
    if (container.contains(defaultSquares)) {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        };
    };
    let sizeOfSquare = (500 / `${numberOfSquares}`) + 'px';
    console.log(sizeOfSquare);

    for (i = 0; i < numberOfSquares; i++) {
        let newColumn = document.createElement('div');
        newColumn.style.width = sizeOfSquare;
        newColumn.classList.add('column');
        container.appendChild(newColumn);
    }
});