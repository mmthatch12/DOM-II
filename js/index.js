// Your code goes here
//Event listener #1 mouseover
let funBus = document.querySelector('h1')
console.log(funBus)
funBus.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'white'
})

//Event Listener #2 mouseoff
funBus.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black'
})

//Event listener #3 dblclick
let busImg = document.querySelectorAll('.img-content')
busImg[0].addEventListener('dblclick', event => {
    event.target.style.border = '5px dashed yellow'
})

//Event listener #4 wheel
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    busImg[1].style.transform = `scale(${scale})`;
}

let scale = 1;
busImg[1].onwheel = zoom;

//Event listener #5 Keydown
let 