const header = document.querySelector("header"),
      headerInner = header.querySelector(".header__inner"),
      gnb = headerInner.querySelector(".gnb"),
      gnbLists = gnb.querySelectorAll("a"),
      gnbBar = gnb.querySelector(".gnb__bar"),
      sectionHello = document.querySelector(".hello");

let gnbListsArray = [],
    sectionTopArray = [];

function scrollToSection(event){
    const main = document.querySelector("main"),
          sections = main.querySelectorAll("section"),
          scrollY = window.pageYOffset,
          thisIndex = gnbListsArray.indexOf(this);
    
    event.preventDefault();
    
    sections.forEach((e)=>{
        const relativeTop = e.getBoundingClientRect().top,
              sectionTop = scrollY+relativeTop;
        sectionTopArray.push(sectionTop);
//        console.log(relativeTop)
    })
    
//    window.scrollTo(0,sectionTopArray[thisIndex]);
    window.scrollTo({
        top: sectionTopArray[thisIndex],
        left: 0,
        behavior: 'smooth'
    });
    
}

function gnbBarOutGnb(){
    gnbBar.style.left = `-20%`;
}

function gnbBarOnGnb(){
    const thisIndex = gnbListsArray.indexOf(this);
    gnbBar.style.left = `${thisIndex*20}%`;
}

function headerClassHandler(e){
    const scrollY = window.pageYOffset,
          helloHeight = sectionHello.offsetHeight; /*처음에 선언하면 css가 적용되기 전의 크기가 나옴*/
    
    if(scrollY >= helloHeight){
        header.classList.add("white")
    }else{
        header.classList.remove("white")
    }
}

function init(){
    window.addEventListener("scroll", headerClassHandler);
    gnbLists.forEach((e)=>{
        gnbListsArray.push(e);
        e.addEventListener("click",scrollToSection);
        e.addEventListener("mouseenter",gnbBarOnGnb);
        e.addEventListener("focus",gnbBarOnGnb);
        e.addEventListener("mouseleave",gnbBarOutGnb);
        e.addEventListener("blur",gnbBarOutGnb);
    });
}
init();