// show menu bar
const spanLinks = document.querySelector(".header .icon")
const secondSpan = document.querySelector(".header button .full-width") 
const shuffleMenu = document.querySelector(".header ul")
const mainBody = document.querySelector("body")

spanLinks.addEventListener("click" , function() {
    shuffleMenu.classList.toggle("open")
    secondSpan.style.width = "100%";
})
// show menu bar

// show seeting box
const seetingIcon = document.querySelector(".landing i")
const seetingBox = document.querySelector(".landing .seeting-box")

seetingIcon.addEventListener("click" , function () {
    seetingIcon.classList.toggle("fa-spin")
    seetingBox.classList.toggle("open")
})

// show seeting box


// seeting color to local storage


const colosList =document.querySelectorAll(".colors li");

colosList.forEach( li => {
    li.addEventListener("click" , function (e) {
        document.documentElement.style.setProperty("--main-color" , e.target.dataset.color);
    })
})




