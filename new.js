let oggetti = [
    {
        titolo: "Margherita",
        data: "1964",
        testobottone: "Fiore",
        colorebottone: "red"
        
    }
];


let lista = document.getElementById("lista");

function aggiungiOggetti (){

for(let oggetto of oggetti){
    let card = document.createElement("div");
    let titolo = document.createElement("h5");
    let data = document.createElement("p");
    let bottone = document.createElement("button");

    titolo.innerHTML = oggetto.titolo;
    data.innerHTML = oggetto.data;
    bottone.innerHTML = oggetto.testobottone;

    card.appendChild(titolo);
    card.appendChild(data);
    card.appendChild(bottone);
    lista.appendChild(card);

    card.className = "col-3 card";
    titolo.className = "card-title";
    bottone.className = "btn btn-primary"

   


}
}




aggiungiOggetti();