let oggetti=[{
    titolo:"Adidas",
    id:"2",
    descrizione:"scarpe",
    anno:"2022"
},
{titolo:"nike",
    id:"5",
    descrizione:"scarpe",
    anno:"2022"},

    {titolo:"diadora",
    id:"8",
    descrizione:"scarpe",
    anno:"2022"},

];

let lista=document.getElementById("lista");
for(let oggetto of oggetti){
    let card=document.createElement("div");
    let titolo=document.createElement("h1");
    let descrizione=document.createElement("p");
    let anno=document.createElement("p");
    let id=document.createElement("p");
    titolo.innerHTML=oggetto.titolo;
    descrizione.innerHTML=oggetto.descrizione;
    anno.innerHTML=oggetto.anno;
    id.innerHTML=oggetto.id;
    card.appendChild(titolo);
    card.appendChild(descrizione);
    card.appendChild(anno);
    card.appendChild(id);
    // card.classList.add("col-3");
    lista.appendChild(card);
    //card.classList.add("border primary");
    card.className="col-3 border border-primary"

}

function aggiungiElemento(){
    let card=document.createElement("div");
    let titolo=document.createElement("h1");
    let descrizione=document.createElement("p");
    let anno=document.createElement("p");
    let id=document.createElement("p");
    titolo.innerHTML=document.getElementById("titoloInput").value;
    descrizione.innerHTML=document.getElementById("descrizioneInput").value;
    anno.innerHTML=document.getElementById("annoInput").value;
    id.innerHTML=document.getElementById("idInput").value;
    card.appendChild(titolo);
    card.appendChild(descrizione);
    card.appendChild(anno);
    card.appendChild(id);
    // card.classList.add("col-3");
    lista.appendChild(card);
    //card.classList.add("border primary");
    card.className="col-3 border border-primary"
}

fetch("https://dummyjson.com/products/1").then(data => data.json()).then(data=>{
    let nomeId =document.getElementById("nome");
    nomeId.innerHTML=data.title;
})