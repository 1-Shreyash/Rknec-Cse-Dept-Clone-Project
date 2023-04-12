const slides = document.querySelectorAll(".slide")
// console.log(slides)
var counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)
const goNext = () => {
    if(counter===7){
        counter=-1
    }
    counter++
    slideImage()
}
const goPrev = () => {
    if(counter===0){
        counter=8
    }
    counter--
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
setInterval(function(){
    goNext()
},4000,Infinity);