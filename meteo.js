let meteo = [];//{"latitude":45.06,"longitude":7.68,"generationtime_ms":0.3839731216430664,"utc_offset_seconds":7200,"timezone":"Europe/Paris","timezone_abbreviation":"CEST","elevation":241.0,"current_weather":{"temperature":25.2,"windspeed":8.0,"winddirection":36.0,"weathercode":2,"is_day":1,"time":"2023-05-24T14:00"},"hourly_units":{"time":"iso8601","weathercode":"wmo code"},"hourly":{"time":["2023-05-24T00:00","2023-05-24T01:00","2023-05-24T02:00","2023-05-24T03:00","2023-05-24T04:00","2023-05-24T05:00","2023-05-24T06:00","2023-05-24T07:00","2023-05-24T08:00","2023-05-24T09:00","2023-05-24T10:00","2023-05-24T11:00","2023-05-24T12:00","2023-05-24T13:00","2023-05-24T14:00","2023-05-24T15:00","2023-05-24T16:00","2023-05-24T17:00","2023-05-24T18:00","2023-05-24T19:00","2023-05-24T20:00","2023-05-24T21:00","2023-05-24T22:00","2023-05-24T23:00","2023-05-25T00:00","2023-05-25T01:00","2023-05-25T02:00","2023-05-25T03:00","2023-05-25T04:00","2023-05-25T05:00","2023-05-25T06:00","2023-05-25T07:00","2023-05-25T08:00","2023-05-25T09:00","2023-05-25T10:00","2023-05-25T11:00","2023-05-25T12:00","2023-05-25T13:00","2023-05-25T14:00","2023-05-25T15:00","2023-05-25T16:00","2023-05-25T17:00","2023-05-25T18:00","2023-05-25T19:00","2023-05-25T20:00","2023-05-25T21:00","2023-05-25T22:00","2023-05-25T23:00","2023-05-26T00:00","2023-05-26T01:00","2023-05-26T02:00","2023-05-26T03:00","2023-05-26T04:00","2023-05-26T05:00","2023-05-26T06:00","2023-05-26T07:00","2023-05-26T08:00","2023-05-26T09:00","2023-05-26T10:00","2023-05-26T11:00","2023-05-26T12:00","2023-05-26T13:00","2023-05-26T14:00","2023-05-26T15:00","2023-05-26T16:00","2023-05-26T17:00","2023-05-26T18:00","2023-05-26T19:00","2023-05-26T20:00","2023-05-26T21:00","2023-05-26T22:00","2023-05-26T23:00","2023-05-27T00:00","2023-05-27T01:00","2023-05-27T02:00","2023-05-27T03:00","2023-05-27T04:00","2023-05-27T05:00","2023-05-27T06:00","2023-05-27T07:00","2023-05-27T08:00","2023-05-27T09:00","2023-05-27T10:00","2023-05-27T11:00","2023-05-27T12:00","2023-05-27T13:00","2023-05-27T14:00","2023-05-27T15:00","2023-05-27T16:00","2023-05-27T17:00","2023-05-27T18:00","2023-05-27T19:00","2023-05-27T20:00","2023-05-27T21:00","2023-05-27T22:00","2023-05-27T23:00","2023-05-28T00:00","2023-05-28T01:00","2023-05-28T02:00","2023-05-28T03:00","2023-05-28T04:00","2023-05-28T05:00","2023-05-28T06:00","2023-05-28T07:00","2023-05-28T08:00","2023-05-28T09:00","2023-05-28T10:00","2023-05-28T11:00","2023-05-28T12:00","2023-05-28T13:00","2023-05-28T14:00","2023-05-28T15:00","2023-05-28T16:00","2023-05-28T17:00","2023-05-28T18:00","2023-05-28T19:00","2023-05-28T20:00","2023-05-28T21:00","2023-05-28T22:00","2023-05-28T23:00","2023-05-29T00:00","2023-05-29T01:00","2023-05-29T02:00","2023-05-29T03:00","2023-05-29T04:00","2023-05-29T05:00","2023-05-29T06:00","2023-05-29T07:00","2023-05-29T08:00","2023-05-29T09:00","2023-05-29T10:00","2023-05-29T11:00","2023-05-29T12:00","2023-05-29T13:00","2023-05-29T14:00","2023-05-29T15:00","2023-05-29T16:00","2023-05-29T17:00","2023-05-29T18:00","2023-05-29T19:00","2023-05-29T20:00","2023-05-29T21:00","2023-05-29T22:00","2023-05-29T23:00","2023-05-30T00:00","2023-05-30T01:00","2023-05-30T02:00","2023-05-30T03:00","2023-05-30T04:00","2023-05-30T05:00","2023-05-30T06:00","2023-05-30T07:00","2023-05-30T08:00","2023-05-30T09:00","2023-05-30T10:00","2023-05-30T11:00","2023-05-30T12:00","2023-05-30T13:00","2023-05-30T14:00","2023-05-30T15:00","2023-05-30T16:00","2023-05-30T17:00","2023-05-30T18:00","2023-05-30T19:00","2023-05-30T20:00","2023-05-30T21:00","2023-05-30T22:00","2023-05-30T23:00"],"weathercode":[0,0,0,0,0,1,0,1,0,0,1,3,1,2,2,2,2,80,96,80,61,61,96,95,61,61,61,61,63,95,95,80,80,80,80,80,80,80,80,96,95,80,3,80,80,3,1,1,1,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,3,3,3,0,1,1,3,3,3,3,2,2,2,3,3,3,80,80,80,80,80,80,80,80,80,95,95,95,3,3,3,3,3,3,80,80,80,3,3,3,3,3,3,1,1,1,1,1,1,45,45,45,80,80,80,3,3,3,80,80,80,95,95,95,80,80,80,80,80,80,80,80,80,80,80,80,95,95,95,3,3,3,80,80,80,3,3,3,95,95,95]},"daily_units":{"time":"iso8601","weathercode":"wmo code"},"daily":{"time":["2023-05-24","2023-05-25","2023-05-26","2023-05-27","2023-05-28","2023-05-29","2023-05-30"],"weathercode":[96,96,2,80,95,95,95]}};

fetch('https://api.open-meteo.com/v1/forecast?latitude=45.07&longitude=7.69&current_weather=true&hourly=weathercode&timezone=CET&daily=weathercode,temperature_2m_max')
  .then(response => response.json())
  .then(meteoOk => {
    console.log(meteoOk);
    meteo = meteoOk;

    mostraMeteo();

  });

function mostraMeteo() {

  let div1 = document.getElementById("div1");

  //div1.innerHTML = "";
  let innerT = "";

  console.log(meteo);
  // let div2 = document.createElement("div2");
  // let h5Gradi = document.createElement("h5");
  // h5Gradi.className = "gradi"
  // h5Gradi.innerHTML = gradi;
  // let h6Giorno = document.createElement("h6");
  // h6Giorno.innerHTML = giorno;
  // div2.appendChild(h6Giorno);
  // div2.appendChild(h5Gradi);
  // div1.appendChild(div2);

  innerT += "<div2><h5></h5><h6></h6></div2>";

  let data = new Date();


  for (let i = 1; i < 6; i++) {
    let id = "giorno" + i;
    let idgradi = "gradi" + i;
    let idicona = "icona";
    console.log(id);
    data.setDate(data.getDate() + 1);

  
    //if (idicona === "96") {
      //idicona === '<i class="fa-solid fa-cloud-bolt fa-2x"></i>'
    //}

    switch (json.meteo[0].main){
      case 'Clear':
        image.src = ''
    }

  
    document.getElementById(id).innerHTML = strDOW(data);
    document.getElementById(idgradi).innerHTML = meteo.daily.temperature_2m_max[i];
    //document.getElementById(idicona).innerHTML = meteo.daily.weathercode;
    //innerT += "<div2><h5>" + meteo[i].gradi + "</h5><h6>" + meteo[i].giorno + "</h6></div2>";
  }
  //div1.innerHTML = innerT;

}

//mostraMeteo();

// const button = document.getElementsByTagName("button")[0];


// button.addEventListener('click', function(){
// let latitudineNuova = document.getElementById("latitudine1")




function strDOW(d) {
  const locale = navigator.language;
  console.log(d + d.toLocaleString(locale, { weekday: 'long', }));
  return d.toLocaleString(locale, { weekday: 'long', });
}