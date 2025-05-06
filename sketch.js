const container = document.querySelector('#container');

let n = 16;

let flagb = 0;
let flagr = 0;
let flagrain = 0;
let flage = 0;

for(let i = 0; i <= n; i++){
const box = document.createElement('div');
box.classList.add('row');
container.appendChild(box);
    for(let j = 0; j <= n; j++){
        const col = document.createElement('div');
        col.classList.add('column');
        box.appendChild(col);
    }
}

    const bpen = document.querySelector('#Black');
    bpen.addEventListener('click', () => {
        flagb = 1;
        flage = 0;
        flagrain = 0;
        flagr = 0
    })
    

    const rpen = document.querySelector('#Red');
    rpen.addEventListener('click', () => {
        flagr = 1;
        flagb = 0;
        flage = 0;
        flagrain = 0;
        console.log(flagb);
    })
    const rain = document.querySelector('#Rainbow');
    rain.addEventListener('click', () => {
        flagrain = 1;
        flagr = 0;
        flagb = 0;
        flage = 0;
    })
    const erase = document.querySelector('#clear');
    erase.addEventListener('click', () => {
        flage = 1;
        flagrain = 0;
        flagr = 0
        flagb = 0;
    })


function draw(){
    let columns = document.querySelectorAll('.column');
    for(i = 0; i < columns.length; i++){
        columns[i].addEventListener('mouseover', changeColor);
    }
}

draw();

function changeColor(){
    

    if (flagb) {
        this.style.backgroundColor = '#2e2b2b';
    } else if (flagr) {
        this.style.backgroundColor = '#da2d2d'
    } else if (flage) {
        this.style.backgroundColor = ''
    } else if (flagrain) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    }
}

function clearGrid() {
    let columns = document.querySelectorAll("#column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = '';
    }
    }
