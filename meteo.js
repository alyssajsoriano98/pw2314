let meteo = [
    {
        "giorno":"lunedì", 
            "gradi":"18.3",
            "timezone": "wewe"
        }];




function mostraMeteo (giorno, gradi) {

let div1 = document.getElementById("div1");

div1.innerHTML = "";
let innerT = "";

let div2 = document.createElement("div2");
let h5Gradi = document.createElement("h5");
h5Gradi.className = "gradi"
h5Gradi.innerHTML = gradi;
let h6Giorno = document.createElement("h6");
h6Giorno.innerHTML = giorno;
div2.appendChild(h6Giorno);
div2.appendChild(h5Gradi);
div1.appendChild(div2);

innerT += "<div2><h5></h5><h6></h6></div2>";


for (let i = 0; i < meteo.length; i++)
  {
    innerT += "<div2><h5>" + meteo[i].gradi + "</h5><h6>" + meteo[i].giorno + "</h6></div2>";
  }
  div1.innerHTML = innerT;

}

mostraMeteo();

const button = document.getElementsByTagName("button")[0];


button.addEventListener('click', function(){
let latitudineNuova = document.getElementById("latitudine1")

fetch('https://api.open-meteo.com/v1/forecast?latitude='+latitudineNuova)
.then(response => response.json())
.then(meteoOk =>{ 
  console.log(meteoOk);
  meteo = meteoOk;
   
  mostraMeteo();
});    
});

