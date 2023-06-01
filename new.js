let oggetti = [
    {
        titolo: "Margherita",
        data: "1964",
        testobottone: "Fiore",
        colorebottone: "red"
    }
];




function aggiungiOggetti (){

for(let oggetto of oggetti){

    let lista = document.getElementById("lista");
    let card = document.createElement("div");
    let cardbody = document.createElement("div");
    let titolo = document.createElement("h5");
    let data = document.createElement("p");
    let bottone = document.createElement("button");
    
    titolo.innerHTML = oggetto.titolo;
    data.innerHTML = oggetto.data;
    bottone.innerHTML = oggetto.testobottone;

    card.appendChild(cardbody);
    cardbody.appendChild(titolo);
    cardbody.appendChild(data);
    cardbody.appendChild(bottone);
    lista.appendChild(card);

    card.className = "col-3 card";
    cardbody.className = "card-body";
    titolo.className = "card-title";
    bottone.className = "btn btn-primary"
    bottone.style.backgroundColor = oggetto.colorebottone;

//    bottone.style.backgroundColor = document.getElementById("colorebottone").value;

}
}




aggiungiOggetti();