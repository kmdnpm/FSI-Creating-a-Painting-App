// painting response
let choice = 0;
let selectedColor = 'red'
const painting = document.querySelector('.painting')
let reds = document.getElementById('red')
let blues = document.getElementById('blue')
let yellows = document.getElementById('yellow')
let greens = document.getElementById('green')

reds.addEventListener('click', function(){
    painting.addEventListener('click', function(e){
        e.target.style.backgroundColor = 'red'
    })
})

blues.addEventListener('click', function(){
    painting.addEventListener('click', function(e){
        e.target.style.backgroundColor = 'blue'
    })

})

yellows.addEventListener('click', function(){
    painting.addEventListener('click', function(e){
        e.target.style.backgroundColor = 'yellow'
    })

})

greens.addEventListener('click',function(){
    painting.addEventListener('click', function(e){
        e.target.style.backgroundColor = 'green'
    })

})

// painting.addEventListener('click', function(e){
//     e.target.style.backgroundColor = selectedColor
// })
