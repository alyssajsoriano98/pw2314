let passaggi = [{"line":"56","hour":"17:01:20","realtime":true},{"line":"56","hour":"17:05:31","realtime":true},{"line":"56","hour":"17:19:50","realtime":true},{"line":"56","hour":"17:29:17","realtime":true},{"line":"56","hour":"17:41:57","realtime":true},{"line":"56","hour":"17:57:32","realtime":true},{"line":"56","hour":"18:05:39","realtime":true},{"line":"56","hour":"18:17:39","realtime":true},{"line":"56","hour":"18:29:39","realtime":true},{"line":"56","hour":"18:41:39","realtime":false},{"line":"56","hour":"18:53:39","realtime":false}]




function mostraPassaggi(linea, orario){

    let table = document.getElementById('tabella');
    let tr = document.createElement('tr')
    let tdLinea = document.createElement('td');
    tdLinea.className = "linea";
    tdLinea.innerHTML = linea;
    let tdOrari = document.createElement('td')
    tdOra.innerHTML = orario;
    tr.appendChild(tdLinea);
    tr.appendChild(tdOrari);
    table.appendChild(tr);

}

    
  


/*fetch('https://gpa.madbob.org/query.php?stop=966')
  .then(response => response.json())
  .then(passaggi =>{ console.log(passaggi) });*/