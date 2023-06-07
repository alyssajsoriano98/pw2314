
let esperienze = [{
    sezione: "Profilo",
    titolo: "Qualifications",
    dataDa: "dal 2015",
    dataA: "al 2020",
    luogo:"<i>Amsterdam, Netherlands</i>",
    testo: "Exceptionally well organized and resourceful Professional with more than six years experience and a solid academic background in accounting and financial management; excellent analytical and problem solving skills; able to handle multiple projects while producing high quality work in a fast-paced, deadline-oriented environment."
},
{
    sezione: "Esperienza Lavorativa",
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
//classi
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


//fetch

let meteo = [];//{"latitude":45.06,"longitude":7.68,"generationtime_ms":0.3839731216430664,"utc_offset_seconds":7200,"timezone":"Europe/Paris","timezone_abbreviation":"CEST","elevation":241.0,"current_weather":{"temperature":25.2,"windspeed":8.0,"winddirection":36.0,"weathercode":2,"is_day":1,"time":"2023-05-24T14:00"},"hourly_units":{"time":"iso8601","weathercode":"wmo code"},"hourly":{"time":["2023-05-24T00:00","2023-05-24T01:00","2023-05-24T02:00","2023-05-24T03:00","2023-05-24T04:00","2023-05-24T05:00","2023-05-24T06:00","2023-05-24T07:00","2023-05-24T08:00","2023-05-24T09:00","2023-05-24T10:00","2023-05-24T11:00","2023-05-24T12:00","2023-05-24T13:00","2023-05-24T14:00","2023-05-24T15:00","2023-05-24T16:00","2023-05-24T17:00","2023-05-24T18:00","2023-05-24T19:00","2023-05-24T20:00","2023-05-24T21:00","2023-05-24T22:00","2023-05-24T23:00","2023-05-25T00:00","2023-05-25T01:00","2023-05-25T02:00","2023-05-25T03:00","2023-05-25T04:00","2023-05-25T05:00","2023-05-25T06:00","2023-05-25T07:00","2023-05-25T08:00","2023-05-25T09:00","2023-05-25T10:00","2023-05-25T11:00","2023-05-25T12:00","2023-05-25T13:00","2023-05-25T14:00","2023-05-25T15:00","2023-05-25T16:00","2023-05-25T17:00","2023-05-25T18:00","2023-05-25T19:00","2023-05-25T20:00","2023-05-25T21:00","2023-05-25T22:00","2023-05-25T23:00","2023-05-26T00:00","2023-05-26T01:00","2023-05-26T02:00","2023-05-26T03:00","2023-05-26T04:00","2023-05-26T05:00","2023-05-26T06:00","2023-05-26T07:00","2023-05-26T08:00","2023-05-26T09:00","2023-05-26T10:00","2023-05-26T11:00","2023-05-26T12:00","2023-05-26T13:00","2023-05-26T14:00","2023-05-26T15:00","2023-05-26T16:00","2023-05-26T17:00","2023-05-26T18:00","2023-05-26T19:00","2023-05-26T20:00","2023-05-26T21:00","2023-05-26T22:00","2023-05-26T23:00","2023-05-27T00:00","2023-05-27T01:00","2023-05-27T02:00","2023-05-27T03:00","2023-05-27T04:00","2023-05-27T05:00","2023-05-27T06:00","2023-05-27T07:00","2023-05-27T08:00","2023-05-27T09:00","2023-05-27T10:00","2023-05-27T11:00","2023-05-27T12:00","2023-05-27T13:00","2023-05-27T14:00","2023-05-27T15:00","2023-05-27T16:00","2023-05-27T17:00","2023-05-27T18:00","2023-05-27T19:00","2023-05-27T20:00","2023-05-27T21:00","2023-05-27T22:00","2023-05-27T23:00","2023-05-28T00:00","2023-05-28T01:00","2023-05-28T02:00","2023-05-28T03:00","2023-05-28T04:00","2023-05-28T05:00","2023-05-28T06:00","2023-05-28T07:00","2023-05-28T08:00","2023-05-28T09:00","2023-05-28T10:00","2023-05-28T11:00","2023-05-28T12:00","2023-05-28T13:00","2023-05-28T14:00","2023-05-28T15:00","2023-05-28T16:00","2023-05-28T17:00","2023-05-28T18:00","2023-05-28T19:00","2023-05-28T20:00","2023-05-28T21:00","2023-05-28T22:00","2023-05-28T23:00","2023-05-29T00:00","2023-05-29T01:00","2023-05-29T02:00","2023-05-29T03:00","2023-05-29T04:00","2023-05-29T05:00","2023-05-29T06:00","2023-05-29T07:00","2023-05-29T08:00","2023-05-29T09:00","2023-05-29T10:00","2023-05-29T11:00","2023-05-29T12:00","2023-05-29T13:00","2023-05-29T14:00","2023-05-29T15:00","2023-05-29T16:00","2023-05-29T17:00","2023-05-29T18:00","2023-05-29T19:00","2023-05-29T20:00","2023-05-29T21:00","2023-05-29T22:00","2023-05-29T23:00","2023-05-30T00:00","2023-05-30T01:00","2023-05-30T02:00","2023-05-30T03:00","2023-05-30T04:00","2023-05-30T05:00","2023-05-30T06:00","2023-05-30T07:00","2023-05-30T08:00","2023-05-30T09:00","2023-05-30T10:00","2023-05-30T11:00","2023-05-30T12:00","2023-05-30T13:00","2023-05-30T14:00","2023-05-30T15:00","2023-05-30T16:00","2023-05-30T17:00","2023-05-30T18:00","2023-05-30T19:00","2023-05-30T20:00","2023-05-30T21:00","2023-05-30T22:00","2023-05-30T23:00"],"weathercode":[0,0,0,0,0,1,0,1,0,0,1,3,1,2,2,2,2,80,96,80,61,61,96,95,61,61,61,61,63,95,95,80,80,80,80,80,80,80,80,96,95,80,3,80,80,3,1,1,1,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,3,3,3,0,1,1,3,3,3,3,2,2,2,3,3,3,80,80,80,80,80,80,80,80,80,95,95,95,3,3,3,3,3,3,80,80,80,3,3,3,3,3,3,1,1,1,1,1,1,45,45,45,80,80,80,3,3,3,80,80,80,95,95,95,80,80,80,80,80,80,80,80,80,80,80,80,95,95,95,3,3,3,80,80,80,3,3,3,95,95,95]},"daily_units":{"time":"iso8601","weathercode":"wmo code"},"daily":{"time":["2023-05-24","2023-05-25","2023-05-26","2023-05-27","2023-05-28","2023-05-29","2023-05-30"],"weathercode":[96,96,2,80,95,95,95]}};

fetch('https://api.open-meteo.com/v1/forecast?latitude=45.07&longitude=7.69&current_weather=true&hourly=weathercode&timezone=CET&daily=weathercode,temperature_2m_max')
  .then(response => response.json())
  .then(meteoTorino => {
    console.log(meteoTorino);
    meteo = meteoTorino;

    mostraMeteo();

  });

function mostraMeteo() {

    let data = new Date();

for (let i = 1; i < 6; i++) {
    let giorno = "giorno";
    let gradi = "gradi";
    let weathercode = "weathercode";

    // console.log();


    document.getElementById(giorno).innerHTML = strDOW(data);
    document.getElementById(gradi).innerHTML = meteo.daily.temperature_2m_max[0];
    document.getElementById(weathercode).innerHTML = mostraWeatherCode(meteo.daily.weathercode[0]);
 
  }

}

function strDOW(d) {
  const locale = navigator.language;
  return d.toLocaleString(locale, { weekday: 'long', });
}


function mostraWeatherCode(numero) {
  switch (numero) {

    case 0:
      return "Cielo sereno";

    case 1:
    case 2:
    case 3:
      return "Prevalentemente sereno, parzialmente nuvoloso e coperto";

    case 45:
    case 48:
      return "Nebbia e nebbia di brina depositante";

    case 51:
    case 53:
    case 55:
      return "Pioggerella: intensità leggera, moderata e densa";

    case 56:
    case 57:
      return "Pioggia gelata: intensità leggera e densa";

    case 61:
    case 63:
    case 65:
      return "Pioggia: intensità leggera, moderata e forte";

    case 66:
    case 67:
      return "Pioggia gelata: intensità leggera e pesante";

    case 71:
    case 73:
    case 75:
      return "Nevicate: intensità leggera, moderata e forte";

    case 77:
      return "Granelli di neve";

    case 80:
    case 81:
    case 82:
      return "Rovesci di pioggia: leggeri, moderati e violenti";

    case 85:
    case 86:
      return "Nevicate leggere e intense";

    case 95:
      return "Temporale: debole o moderato";
    case 96:
    case 99:
      return "Temporale con lieve e forte grandine";

    default: return "";
  }

}
  
