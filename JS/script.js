const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const bigImg = document.querySelector(".big-img")
const side = document.querySelector(".side")
side.innerHTML = imgVista(images)
let img = "";
let imgActive = 0

//PRIMA IMG
primaImg(images);
let loop = setInterval(autoplay, 3000)
console.log(loop);


// NEXT
document.querySelector(".next").addEventListener("click", function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".border-active").classList.remove("border-active");
    imgActive++
    if (imgActive > images.length -1) {
        imgActive = 0;
    }
    document.querySelectorAll(".item")[imgActive].classList.add("active");
    document.querySelectorAll(".img-side")[imgActive].classList.add("border-active");
    console.log(imgActive);
})
//PREV
document.querySelector(".prev").addEventListener("click", function(){
    document.querySelector(".active").classList.remove("active");

    imgActive--
    if (imgActive == -1) {
        imgActive = images.length -1;
    }
    document.querySelectorAll(".item")[imgActive].classList.add("active");
    console.log(imgActive);
})
// stop
document.querySelector(".stop-auto").addEventListener("click" , function(){
    clearInterval(loop)
    console.log(loop);
})
//play
document.querySelector(".start-auto").addEventListener("click", function(){
    loop = setInterval(autoplay, 3000)
    console.log(loop);
})
//reverse
document.querySelector(".rev-auto").addEventListener("click", function(){
    clearInterval(loop)
    loop = setInterval(autoplayRev, 3000)
    console.log(loop);
})

// FUNZIONI
// mostra la prima img
function primaImg(array) {
    for (let i = 0; i < array.length; i++) {
       let prod = array[i];
       if (i ==  0){
           bigImg.innerHTML += `
           <div class= "item active">
                <img src="${prod.image}" alt="${prod.title} photo">
                <div class="note">
                    <h2>${prod.title}</h2>
                    <p> ${prod.text}</p>
                </div>
            </div>`   
       } else{
           bigImg.innerHTML += `
           <div class= "item">
                <img src="${prod.image}" alt="${prod.title} photo">
                <div class="note">
                    <h2>${prod.title}</h2>
                    <p> ${prod.text}</p>
                </div>
            </div>`
       }
    }
}
// funzione ruota immagine in vista
function imgVista (array){
let imgProd = "";
for (let i = 0; i < array.length; i++){
    const prod = array[i]
    imgProd += `
    <div class="img-side">
        <img src="${prod.image}" alt="${prod.title} photo">
    </div>`  
    console.log(imgProd);
}
return imgProd;
}
//Funzione autoplay
function autoplay (){
    document.querySelector(".active").classList.remove("active");
    imgActive++
    if (imgActive > images.length -1) {
        imgActive = 0;
    }
    document.querySelectorAll(".item")[imgActive].classList.add("active");
    console.log(imgActive,);
}
//Funzione autoplay rev
function autoplayRev (){
    document.querySelector(".active").classList.remove("active");
    imgActive--
    if (imgActive < 0) {
        imgActive = images.length -1;
    }
    document.querySelectorAll(".item")[imgActive].classList.add("active");
    console.log(imgActive,lll);
}