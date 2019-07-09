// Your code goes here

//click event
const busHead = document.querySelector('.logo-heading')
busHead.addEventListener('click', event => event.target.style.color = 'blue')

//mouseenter event

const nava = document.querySelectorAll('.nav a')
nava.forEach(item => item.addEventListener('mouseenter', event => event.target.style.color = 'blue'))

//mouseleave event
nava.forEach(item => item.addEventListener('mouseleave', event => event.target.style.color = 'black'))

//keydown event not working yet
const textcont = document.querySelector('.text-content h2')
console.log(textcont)

textcont.addEventListener('keydown', event => event.target.style.color = 'blue')

//dblclick event
const imgg = document.querySelectorAll('img')
imgg.forEach(item => item.addEventListener('dblclick', event => event.target.style.border = '3px dashed blue'))
imgg.forEach(item => item.addEventListener('dblclick', event => event.target.style.borderRadius = '70px'))
