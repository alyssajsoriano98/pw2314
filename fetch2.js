const button = document.getElementsByTagName("button")[0];



button.addEventListener('click', function(){

fetch('https://gpa.madbob.org/query.php?stop=27')
  .then(response => response.json())
  .then(passaggi =>{ console.log(passaggi)});    

});


    let passaggi = [
        {line:"10",hour:"01:07:23",realtime:false},
        {line:"49",hour:"01:09:23",realtime:false},
        {line:"13",hour:"01:17:20",realtime:false},
        {line:"10",hour:"01:19:23",realtime:false},
        {line:"10N",hour:"01:40:00",realtime:false},
        {line:"10N",hour:"01:40:00",realtime:false}];


mostraPassaggio();

function mostraPassaggio(){

    let table = document.createElement("table");
    
    let innerT = "";
    
    innerT += "<tr class='firstRow'><th>Linea</th><th>Orario</th><th>Realtime</th></tr>";
    
    for (var i = 0; i < passaggi.length; i++)
    {
        innerT += "<tr><td>" + passaggi[i].line + "</td><td>" + passaggi[i].hour + "</td><td>" + passaggi[i].realtime;
    }
    table.innerHTML = innerT;
    
    document.body.append(table);
}



    