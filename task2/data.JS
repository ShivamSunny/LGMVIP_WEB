let bigconatiner = document.getElementById('bigcontainer')
let fetchdata = document.getElementById("FetchData");
let firstcircle = document.getElementById("firstcircle")
let mainmenu = document.getElementById("mainmenu")
let datadisplay = document.getElementById("data")
fetchdata.addEventListener('click',e=>{

    datadisplay.style.display = "block"
    datadisplay.style.animation = "transition"
    datadisplay.style.animationDuration = "10s"


    firstcircle.style.animationName = "processing"
    firstcircle.style.animationDelay = "1.5s"
    firstcircle.style.animationDuration = "6s"
    firstcircle.style.animationFillMode = "ease-in-out"

    secondcircle.style.animationName = "processing"
    secondcircle.style.animationDelay = "1.5s"
    secondcircle.style.animationDuration = "6.5s"
    secondcircle.style.animationFillMode = "ease-in-out"

    thirdcircle.style.animationName = "processing"
    thirdcircle.style.animationDelay = "1s"
    thirdcircle.style.animationDuration = "7s"
    thirdcircle.style.animationFillMode = "ease-in-out"

    forthcircle.style.animationName = "processing"
    forthcircle.style.animationDelay = "1s"
    forthcircle.style.animationDuration = "7.5s"
    forthcircle.style.animationFillMode = "ease-in-out"

    // fifthcircle.style.animationName = "pocessing"
    // fifthcircle.style.animationDelay = "0.5s"
    // fifthcircle.style.animationDuration = "8s"
    // fifthcircle.style.animationFillMode = "ease-in-out"

    // sixthcircle.style.animationName = "pocessing"
    // sixthcircle.style.animationDelay = "0.5s"
    // sixthcircle.style.animationDuration = "9.5s"
    // sixthcircle.style.animationFillMode = "ease-in-out"



})

mainmenu.addEventListener('click',e=>{
    firstcircle.style.removeProperty('animation')
    secondcircle.style.removeProperty('animation')
    thirdcircle.style.removeProperty('animation')
    forthcircle.style.removeProperty('animation')
    // fifthcircle.style.removeProperty('animation')
    // sixthcircle.style.removeProperty('animation')

    datadisplay.style.display = "none"
})