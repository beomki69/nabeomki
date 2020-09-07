const main = document.querySelector("main"),
    sectionList = main.querySelectorAll("section"),
    aboutInner = main.querySelector(".aboutInner");

function sectionInnerClassHandler(section){
    const title = section.querySelector("h2"),
          container = section.querySelector(".container"),
          containerListAll = container.querySelectorAll(".containerList");
    
    title.classList.add("fadeUp");
    
    for(let i=0;i<containerListAll.length;i++){
        containerListAll[i].style.animationDelay = `${(i+1)*0.4}s`;
    }
    
    containerListAll.forEach((e)=>{
        e.classList.add("fadeUp");
    })
}

function aboutClassHandler(section){
    const title = section.querySelector(".aboutInner__title"),
          text = section.querySelector(".aboutInner__text");
    
    title.classList.add("fadeUp");
    text.style.animationDelay = `0.5s`;
    text.classList.add("fadeUp");
}

function fadeUp(element) {
    const hasFirstClass = element.classList.item(0);
    switch (hasFirstClass) {
        case "about":
            aboutClassHandler(element);
            break;
        case "skills":
        case "project":
        case "contact":
            sectionInnerClassHandler(element);
            break;
        default:
            return false;
    }
}

function scrolling() {
    for (let i = 0; i < sectionList.length; i++) {
        const relativeTop = sectionList[i].getBoundingClientRect().top,
              viewportHeight = window.innerHeight;
        if (relativeTop <= viewportHeight) {fadeUp(sectionList[i]);}
    }
}

function init() {
    window.addEventListener("scroll", scrolling);
}

init();
