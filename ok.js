
let esperienze = [{
    sezione: "Profilo",
    titolo: "Qualifications",
    dataDa: "dal 2015",
    dataA: "al 2020",
    luogo:"<i>Amsterdam, Netherlands</i>",
    testo: "Exceptionally well organized and resourceful Professional with more than six years experience and a solid academic background in accounting and financial management; excellent analytical and problem solving skills; able to handle multiple projects while producing high quality work in a fast-paced, deadline-oriented environment."
},
{
    sezione: "Esperienza lavorativa",
    titolo: "Accounting and Financial Management",
    dataDa: "dal 2010",
    dataA: "al 2020",
    luogo:"<i>Warsaw , Poland</i>",
    testo: "Experienced business professional with a solid academic background and a demonstrated commitment to providing high quality customer service; described as a person with exceptional communication and human relations skills; proficient in the use of MS Office (Word, Excel, PowerPoint) with basic knowledge of PeopleSoft."
},
{
    sezione: "Istruzione",
    titolo: "Bachelor of Science",
    dataDa: "dal 2012",
    dataA: "al 2018",
    luogo:"<i>Roma , Italy</i>",
    testo: "Supervise operations and staff in a 20-person inbound telemarketing unit, including hiring, training and evaluating employees, preparing and administering annual budgets, developing business plans, etc. Assess level of customer satisfaction and resolve sensitive and complex issues raised by customers; provide additional training and take other action as required to maintain a high level of customer satisfaction"
},

];

function aggiungiCardEsperienze(){

for(let oggetto of esperienze){

//elementi esistenti
    let container = document.getElementById("container");
    let rowcard = document.getElementById("rowcard");
//elementi da creare
    let colCard = document.createElement("div");
    let card1 = document.createElement("div");
    //sezione
    let cardSezione = document.createElement("div");
    let cardBody = document.createElement("div");
    //titolo
    let cardTitolo = document.createElement("h5");
    //date
    let containerDate = document.createElement("div");
    let rowDate = document.createElement("div");
    let colDataDa = document.createElement("div");  
    let dataDa = document.createElement("h6");
    let colDataA = document.createElement("div");  
    let dataA = document.createElement("h6");
    //luogo
    let luogo = document.createElement("p");
    //testo
    let testo = document.createElement("p"); 

    cardSezione.innerHTML = oggetto.sezione;
    cardTitolo.innerHTML = oggetto.titolo;
    dataDa.innerHTML = oggetto.dataDa;
    dataA.innerHTML = oggetto.dataA;
    luogo.innerHTML = oggetto.luogo;
    testo.innerHTML = oggetto.testo;

    colCard.appendChild(card1);
    card1.appendChild(cardSezione);
    card1.appendChild(cardBody);
    cardBody.appendChild(cardTitolo);
    cardBody.appendChild(containerDate);
    cardBody.appendChild(luogo);
    cardBody.appendChild(testo);
    containerDate.appendChild(rowDate);
    rowDate.appendChild(colDataDa);
    colDataDa.appendChild(dataDa);
    rowDate.appendChild(colDataA);
    colDataA.appendChild(dataA);
//
    container.appendChild(rowcard);
    rowcard.appendChild(colCard);

    container.className = "container text-center";
    rowcard.className = "row";
    colCard.className = "col-sm";
    card1.className = "card text-bg-light";
    card1.style = "max-width: 18rem;";
    cardSezione.className = "card-header";
    cardBody.className = "card-body";
    cardTitolo.className = "card-title";
    containerDate.className = "container text-center col-7";
    rowDate.className = "row align-items-center";
    colDataDa.className = "col";
    dataDa.className = "card-text";
    colDataA.className = "col";
    dataA.className = "card-text";
    luogo.className = "card-text text-center";
    testo.className = "card-text";
   
    

}
};

aggiungiCardEsperienze()

bottone.onclick = function aggiungiNuovaCard (){

    let container = document.getElementById("container");
    let rowcard = document.getElementById("rowcard");
    let colCard = document.createElement("div");
    let card1 = document.createElement("div");
    let cardSezione = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardTitolo = document.createElement("h5");
    let containerDate = document.createElement("div");
    let rowDate = document.createElement("div");
    let colDataDa = document.createElement("div");  
    let dataDa = document.createElement("h6");
    let colDataA = document.createElement("div");  
    let dataA = document.createElement("h6");
    let luogo = document.createElement("p");
    let testo = document.createElement("p");

    cardSezione.innerHTML = document.getElementById("sezioneInput").value;
    cardTitolo.innerHTML = document.getElementById("titoloInput").value;
    dataDa.innerHTML = document.getElementById("dataDaInput").value;
    dataA.innerHTML = document.getElementById("dataAInput").value;
    luogo.innerHTML = document.getElementById("luogoInput").value;
    testo.innerHTML = document.getElementById("testoInput").value;

    colCard.appendChild(card1);
    card1.appendChild(cardSezione);
    card1.appendChild(cardBody);
    cardBody.appendChild(cardTitolo);
    cardBody.appendChild(containerDate);
    cardBody.appendChild(luogo);
    cardBody.appendChild(testo);
    containerDate.appendChild(rowDate);
    rowDate.appendChild(colDataDa);
    colDataDa.appendChild(dataDa);
    rowDate.appendChild(colDataA);
    colDataA.appendChild(dataA);
//
    container.appendChild(rowcard);
    rowcard.appendChild(colCard);

    container.className = "container text-center";
    rowcard.className = "row";
    colCard.className = "col-sm";
    card1.className = "card text-bg-light";
    card1.style = "max-width: 18rem;";
    cardSezione.className = "card-header";
    cardBody.className = "card-body";
    cardTitolo.className = "card-title";
    containerDate.className = "container text-center col-6";
    rowDate.className = "row align-items-center";
    colDataDa.className = "col";
    dataDa.className = "card-text";
    colDataA.className = "col";
    dataA.className = "card-text";
    luogo.className = "card-text text-center";
    testo.className = "card-text";

};

//fetch1
  
//   fetch('https://gpa.madbob.org/query.php?stop='+numeroFermata)
//   .then(response => response.json())
//   .then(passaggio =>{ 
//     console.log(passaggio);

//fetch2

// let qualcosa

// fetch('https://api.open-meteo.com/v1/forecast?latitude=45.07&longitude=7.69&current_weather=true&hourly=weathercode&timezone=CET&daily=weathercode,temperature_2m_max')
//   .then(response => response.json())
//   .then(fetchQualcosa => {
//     console.log(fetchQualcosa);
//     meteo = fetchQualcosa;

//     mostraFunzione();

//   });

// function mostraFunzione() {

//   //scrivi cose
// }
