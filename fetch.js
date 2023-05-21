//let passaggi = [{"line":"56","hour":"17:01:20","realtime":true},{"line":"56","hour":"17:05:31","realtime":true},{"line":"56","hour":"17:19:50","realtime":true},{"line":"56","hour":"17:29:17","realtime":true},{"line":"56","hour":"17:41:57","realtime":true},{"line":"56","hour":"17:57:32","realtime":true},{"line":"56","hour":"18:05:39","realtime":true},{"line":"56","hour":"18:17:39","realtime":true},{"line":"56","hour":"18:29:39","realtime":true},{"line":"56","hour":"18:41:39","realtime":false},{"line":"56","hour":"18:53:39","realtime":false}]

const button = document.getElementsByTagName("button")[0];

button.addEventListener('click', function(){

fetch('https://gpa.madbob.org/query.php?stop=1550')
  .then(response => response.json())
  .then(passaggi =>{ console.log(passaggi)});    

});

    
//

//let nomi = ["Giacomo", "Aldo", "Giovanni", "Marina"];
let passaggi = [{line:"56",hour:"00:15:51",realtime:"true"}]


let prossimaLinea = 56;
aggiungiOrariListaIniziale([0]);

//
mostraPassaggio();

function mostraPassaggio(orario , linea){

    
    let passaggini = "";

    passaggini += <tr>
    <th class="th-title" id="titoloLinea">Linea</th>
    <th class="th-title" id="titoloOrario">Orario</th>
</tr>

    let table = document.getElementById("tabella");
    let tr = document.createElement("tr");
    let tdOrari = document.createElement("td");
    tdOrari.className = "orario";
    tdOrari.innerHTML = orario;
    let tdLinea = document.createElement("td");
    tdLinea.innerHTML = linea;
    tr.appendChild(tdLinea);
    tr.appendChild(tdOrari);
    table.appendChild(tr);
}

function mostraPassaggio(orario){
    
    let table = document.getElementById("tabella");
    let tr = document.createElement("tr");
    let tdOrari = document.createElement("td");
    tdOrari.className = "orario";
    tdOrari.innerHTML = orario;
    let tdLinea = document.createElement("td");
    tdLinea.innerHTML = prossimaLinea;
    tr.appendChild(tdLinea);
    tr.appendChild(tdOrari);
    table.appendChild(tr);
}

function aggiungiOrariListaIniziale(){


    for(let i = 0; i < passaggi.length; i++){

        mostraPassaggio(passaggi[i]);
//
        passaggi += "56" + passaggi[i].line + "00:15:51";
    } 
}




function mostraPassaggioNuovo(){
    let orarioNuovo = document.getElementById('orarioNuovo').value;
   
    if(orarioNuovo == "" || orarioNuovo == "undefined")
        alert("Inserisci la fermata");
    else{
        mostraPassaggio(orarioNuovo);
        document.getElementById('orarioNuovo').value = "";
    }

}



/*function mostraPassaggi(linea, orario){

    let table = document.getElementById('tabella');
    let tr = document.createElement('tr')
    let tdLinea = document.createElement('td');
    tdLinea.className = "linea";
    tdLinea.innerHTML = linea;
    let tdOrari = document.createElement('td')
    tdOrari.innerHTML = orario;
    tr.appendChild(tdLinea);
    tr.appendChild(tdOrari);
    table.appendChild(tr);

}*/

