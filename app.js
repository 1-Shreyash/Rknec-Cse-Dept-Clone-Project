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


const slides2 = document.querySelectorAll(".faculty")
// console.log(slides)
var counter2 = 0;
slides2.forEach(
    (faculty,index) => {
        faculty.style.left = `${index * 100}%`
    }
)
const goNext2 = () => {
    if(counter2===5){
        counter2=-1
    }
    counter2++
    slideImage2()
}
const goPrev2 = () => {
    if(counter2===0){
        counter2=6
    }
    counter2--
    slideImage2()
}
const slideImage2 = () => {
    slides2.forEach(
        (faculty) => {
            faculty.style.transform = `translateX(-${counter2 * 100}%)`
        }
    )
}
// setInterval(function(){
//     goNext2()
// },10000);