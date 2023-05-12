 /*modo 1
let tr = document.createElement ("tr");
let td = document.createElement ("td");
td.innerHTML = "Aldo";
tr.innerHTML(td);
table.appendChild(tr);
*/

/*
for (let = i; i <= nomi.length; i++){
}
*/ 

let nomi = ["Aldo","Giovanni","Giacomo"]

let table = document.getElementById("tabella")

for(nome of nomi){

let tr = document.createElement ("tr");
let td = document.createElement ("td");
td.innerHTML = nome;
tr.appendChild(td);
table.appendChild(tr);
}

//tabella con nomi e un numero progressivo


let names = ["Bea","Ely","Lea"]

let 







//let p = document.getElementById("prova");
//console.log(p)

//p.innerHTML = "Sto modificando p"
