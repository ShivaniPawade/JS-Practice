const slider=document.querySelectorAll(".image")
console.log(slider);
var counter=0;

slider.forEach(
    (image,index) => {
    image.style.left = `$(index * 100) %`
})

// const previousbtn = () => {
//     counter++
//     slideImage()
// }

// const nextbtn= () => {
//     counter--
//     slideImage()
// }

const previousbtn = () =>{
    if (counter == 0) {
        counter = slider.length - 1;
        slideImage();
    } else {
        counter--;
        slideImage();
    }
}

const nextbtn = () =>{
    if (counter == slider.length - 1) {
        counter = 0;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
}

const slideImage = ()=>{
    slider.forEach(
        (image)=>{
            image.style.transform = `translateX(-${counter*100}%)`
        }
    )
}
