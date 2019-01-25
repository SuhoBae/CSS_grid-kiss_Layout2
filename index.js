const topBtn = document.querySelector(".back-to-top");
    SCROLLED_CN = "scrolled";
    FADED_CN = "faded";


function handleScroll () {
    const scrollY = window.scrollY;
    console.log(window.scrollY)
    if(scrollY > 1100){
        topBtn.classList.add(SCROLLED_CN);        
        console.log("Back to Top");
    }else{
        topBtn.classList.remove(SCROLLED_CN);  
        console.log("disappear");
    }
}



window.addEventListener("scroll",handleScroll);