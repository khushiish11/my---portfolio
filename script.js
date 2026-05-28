
window.addEventListener('scroll', function() {
    console.log("scrolling!", window.scrollY)
    
    let nav = document.querySelector('nav')
    
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#e94560'
    } else {
        nav.style.backgroundColor = '#1a1a2e'
    }
})

let hero = document.querySelector('#typing')
let text = "Hi , Im Khushi Sharma"
let i = 0;

hero.textContent = ""
let interval = setInterval(function(){
    hero.textContent = text.slice(0,i);
    i++;
    if(i > text.length){
       clearInterval(interval);
    }
},100);

let button = document.querySelector('#backToTop')
window.addEventListener('scroll', function(){
    if(window.scrollY > 300){
       button.style.display = 'block'
    }
    else{
        button.style.display = 'none'
    }
})
button.addEventListener('click',function(){
    window.scrollTo(0,0)
})