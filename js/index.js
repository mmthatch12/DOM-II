// Your code goes here
//Event listener #1 mouseover
let funBus = document.querySelector('h1')
console.log(funBus)
funBus.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'yellow';
})

//Event Listener #2 mouseoff
funBus.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'white';
})