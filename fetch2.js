  let passaggi = [
        {
            "line":"64","hour":"12:38:01","realtime":true},
            {"line":"64","hour":"12:53:01","realtime":false},
            {"line":"64","hour":"13:08:01","realtime":true},
            {"line":"64","hour":"13:23:01","realtime":false},
            {"line":"64","hour":"13:38:01","realtime":false},
            {"line":"64","hour":"13:53:01","realtime":false},
            {"line":"64","hour":"14:08:01","realtime":false}];


         

function mostraPassaggio(line, hour){

    let table = document.createElement("table");
    
    let innerT = "";

    let tr = document.createElement("tr");
    let tdHour = document.createElement("td");
    tdHour.className = "hour";
    tdHour.innerHTML = hour;
    let tdLine = document.createElement("td");
    tdLine.innerHTML = line;
    tr.appendChild(tdLine);
    tr.appendChild(tdHour);
    table.appendChild(tr);

    
    innerT += "<tr class='firstRow'><td><b>Linea</b></td><td><b>Orari</b></td><td><b>Linea</b></td></tr>";
    
    for (var i = 0; i < passaggi.length; i++)
    {
        innerT += "<tr><td>" + passaggi[i].line + "</td><td>" + passaggi[i].hour + "</td><td>" + passaggi[i].realtime + "</td></tr>";
    }
    table.innerHTML = innerT;
    
    document.body.append(table);

      }

      



mostraPassaggio();


const button = document.getElementsByTagName("button")[0];


button.addEventListener('click', function(){

fetch('https://gpa.madbob.org/query.php?stop=1934')
  .then(response => response.json())
  .then(passaggi =>{ console.log(passaggi)});    

});


