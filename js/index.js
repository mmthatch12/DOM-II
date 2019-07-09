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

//Event listener contextmenu #5 
let tcHeaders = document.querySelector('.content-destination h2')
console.log(tcHeaders)
tcHeaders.addEventListener('contextmenu', event => {
    event.preventDefault()
})

//Event listener #6 load
window.addEventListener('load', (event) => {
    console.log('page is now loaded')
})

//Event Listener #7 click
let containHome = document.querySelector('.inverse-content .text-content p')
containHome.addEventListener('click', event => {
    event.target.style.backgroundColor = 'yellow'
})


//Event Listener #8 paste
let whereToPaste = document.querySelector('.intro p')
whereToPaste.addEventListener('paste', event => {
    let paste = (event.clipboardData || window.clipboardData).getData('text')
    paste = paste.toUpperCase();

    const selection = window.getSelection()
    if (!selection.rangeCount) return false
    selection.deleteFromDocument()
    selection.getRangeAt(0).insertNode(document.createTextNode(paste))

    event.preventDefault()
})

//Event Listener #9 auxclick
let theNav = document.querySelector('.nav')
theNav.addEventListener('auxclick', event => {
    event.preventDefault()
    event.target.style.color = 'yellow'
})

//Event Listener #10 another dblclick
let button = document.querySelector('.btn')
button.addEventListener('dblclick', event => {
    event.target.style.color = 'purple'
})

//mousemove event
function shME(event){
    const xcord = document.querySelector('.xcord')
    const ycord = document.querySelector('.ycord')
    xcord.textContent = event.clientX
    ycord.textContent = event.clientY
}

document.body.addEventListener('mousemove', event => {shME(event)
})

// prevent event propagation

let propa = document.querySelector('.intro h2')
let heada = document.querySelector('header')

theNav.addEventListener('click', event => {
    if (event.target.tagName ==='A') {
        const titleText = event.target.textContent
        propa.textContent = titleText
        event.stopPropagation()
    }
})

heada.addEventListener('click', event => {
    propa.textContent = 'Header Clicked'
    event.stopPropagation()
})
