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

const container = document.querySelector(".container")
container.innerHTML = mostraImg(images);
const side = document.querySelector(".container.side")
let img = "";
let imgActive = 0





// FUNZIONI
// funzione crea immagine in vista
function mostraImg (array){
    let result = "";
for (let i = 0; i < array.length; i++) {
   let prod = array[i];
   if (i ==  0){
       result += `
       <div class="big-img active">
           <img src="${prod.image}" alt="${prod.title} photo">
           <div class="note">
               <h2>${prod.title}</h2>
               <p> ${prod.text}</p>
           </div>
       </div>`    
   }else{
   result += `
    <div class="big-img">
        <img src="${prod.image}" alt="${prod.title} photo">
        <div class="note">
            <h2>${prod.title}</h2>
            <p> ${prod.text}</p>
        </div>
    </div>` 
   }
   return result ;
}
}

// funzione ruota immagine in vista
function imgVista (array){
let imgProd = "";
for (let i = 0; i < array.length; i++){
    const prod = array[i]
    imgProd += `
    <div class="img-side active">
        <img src="${prod.image}" alt="${prod.title} photo">
    </div>`  
}
console.log(imgProd);
return imgProd;
}
