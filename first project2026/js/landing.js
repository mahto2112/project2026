

const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".box");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

    if(index >= slide.length){
        current = 0;
    }else if(index < 0){
        current = slide.length - 1;
    }else{
        current = index;
    }

    slides.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[current].classList.add("active");
}

document.querySelector(".next").addEventListener("click",function(){
    showSlide(current + 1);
});

document.querySelector(".prev").addEventListener("click",function(){
    showSlide(current - 1);
});

dots.forEach((dot,index)=>{
    dot.addEventListener("click",function(){
        showSlide(index);
    });
});

setInterval(function(){
    showSlide(current + 1);
}
,999);