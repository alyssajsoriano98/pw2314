let elementi = [
    {
        url: "/img/pexels-valeria-boltneva-1961772.jpg",
        titolo: "Farfalla",
        prezzo: "920$"
    },
    {
        url: "/img/artem-beliaikin-6SPU6-KkyhA-unsplash.jpg",
        titolo: "Altalena",
        prezzo: "300$"
    },
    {
        url: "/img/mohammad-alizade-CDu0x1Aiils-unsplash.jpg",
        titolo: "Paesaggio",
        prezzo: "350$"
    },
    {
        url: "/img/pexels-valeria-boltneva-1961772.jpg",
        titolo: "Farfalla",
        prezzo: "920$"
    },
    {
        url: "/img/artem-beliaikin-6SPU6-KkyhA-unsplash.jpg",
        titolo: "Altalena",
        prezzo: "300$"
    },
    {
        url: "/img/mohammad-alizade-CDu0x1Aiils-unsplash.jpg",
        titolo: "Paesaggio",
        prezzo: "350$"
    }

];

function mostraElementi(){
let rowcard = document.getElementById("rowcard");
let colcard = document.createElement("div");
colcard.className = "col";
let divcard = document.createElement("div");
divcard.classList.add("card");
divcard.classList.add("h-100");
let immagine = document.createElement("img");
immagine.src = "/img/pexels-valeria-boltneva-1961772.jpg";
immagine.className = "card-img-top";
let cardbody = document.createElement("div");
cardbody.className = "card-body";
let h5card = document.createElement("h5");
h5card.className = "card-title";
h5card.innerHTML = "Farfalla";
let pcard = document.createElement("p");
pcard.className = "card-text";
pcard.innerHTML = "920$";
cardbody.appendChild(h5card);
cardbody.appendChild(pcard);
divcard.appendChild(immagine);
divcard.appendChild(cardbody);
colcard.appendChild(divcard);
rowcard.appendChild(colcard);

console.log("ciao");
}

mostraElementi();


