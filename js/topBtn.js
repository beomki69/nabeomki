const topBtn = document.getElementById("topBtn");

function btnFade(){
    const scrollY = window.scrollY;
    if(scrollY >= 400){
        topBtn.style.opacity = 0.6;
    }else{
        topBtn.style.opacity = 0;
    }
}

function goToTop(e){
     window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function init(){
    window.addEventListener("scroll",btnFade);
    topBtn.addEventListener("click",goToTop);
}
init();