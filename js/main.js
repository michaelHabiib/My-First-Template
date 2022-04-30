// show menu bar
const spanLinks = document.querySelector(".header button")
const secondSpan = document.querySelector(".header button .full-width") 
const shuffleMenu = document.querySelector(".header ul")
const mainBody = document.querySelector("body")

spanLinks.onclick = function showMenuBar() {
    shuffleMenu.style.display = "block";
    secondSpan.style.width = "100%";
    // console.log("hello from js file");
}
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




