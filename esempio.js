/*let a ='ciao';
let b = 2+3;
let base = 10;
let altezza = 6;

console.log(a);
console.log(b);
b = 4;
console.log(b);
console.log("La tua area è" + (base * altezza) + "cm");


let num = 5;
console.log(num % 2);

console.log(base == altezza);

console.log(base % 2 == 0); //base pari

//console.log(base && altezza % 2 == 0) sbagliato

console.log(base % 2 == 0) && (altezza % 2 == 0);

console.log()

var x = "12";
var y = "13";
var z = x * y;

console.log(z);

var x = "12";
var y = x + 13;
console.log(y);

console.log(12 == "12");
console.log(12 === 6+6);


var k = "4";
var o = 2;
console.log(typeof k);
console.log(typeof o);

var kNum =parseInt(k)
console.log(typeof k)





let temperature = [10,13,16,23,98];

console.log(temperature);
console.log(temperature[0]);
temperature[0] = 20;
console.log(temperature[3]);

let tris = [
["", "", ""]
]
console.log(tris[3]);





let età = 13
if (età > 14) 
{console.log("OK");
}

else {console.log("NO");
} */






/*let base = 12;
let altezza = 14;

if (base == altezza)
{console.log("quadrato");
}

if (base != altezza)
{console.log("rettangolo");
}*/



/*let imposta = 400
let reddito = 40000

if (reddito < 2000)
{console.log(0);
}

if (reddito < 15000)
{console.log();
}

if (reddito < 30000)
{console.log();
}

if (reddito > 30000)
{console.log();
}*/






/*let reddito = 40000;
let imposte = 0;

if (reddito > 30000){
    imposte += (reddito-30000)*.4;
    reddito = 30000;

}


if (reddito > 11000){
    imposte += (reddito-11000)*.3;
    reddito = 11000;
}

if (reddito >10000){
    imposte += (reddito-10000)*.1;
    reddito = 10000;
}

console.log(imposte);




let x = 1, y = 2, z = 3;

if (x < y && x < z)
    console.log(x);

else (y < x && y < z)
    console.log(y);




let l1= 10, l2=12, l3=3;



x!=y && ecc
*/




/*let n = 0;

while (n<=10){

console.log(n);
n++;

}*/

//DA 10 a 0

/*let x = 10;

while (x>=0){

console.log(x);
x--;

}


// da 6 a 0 solo numeri pari

let n = 6;

while (n >= 0){
 if (n % 2 == 0){
 
    console.log(n);
}
    n--;
}


//da 0 a 8

for (let i = 0; i < 8; i++) {
    console.log(i)
}



//da 10 a 0
for (let a = 10; a >= 0; a--) {
console.log(a);
}


//stampa tutti gli elementi
let array = [1,22,3,45,5,10];
for (let i = 0; i < array.length; i++){
console.log(array[i]);
}


//con of
let array = [1,22,3,45,5,10];
for(numero of array) {
 console.log(numero)
}*/

//stampare numeri pari di un array


/*let array = [1,2,3,4,5,6];

for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0)
console.log(array[i]);
}



//due array di dimensione uguale calcolare vettore somma

//pari o dispari tramite funzione


function paridispari(num){
    if(num % 2 == 0)
    console.log("Pari")
    else
    console.log("Dispari")
}

let numero = 0

 paridispari(numero);*/


 // somma

 /*function somma(x,y){
 return x + y;
 }
let sum = somma(x,5);
 somma (x,5);
 console.log(somma(2,3));*/

 //funzione senza return

 /*function molt(n){
    molt(n)
    console.log(molt(2,3))
 }

 //funzione con return

 function molti(a,b){
    return a *b;
 }

 molti (a*10);
 console.log(molti(a*10))*/

 //senza return

 function stampaFattoriale(n){
   
    console.log(fattoriale(n));
 }
 stampaFattoriale(4);

 //con return

 function fattoriale(n){
    let tot = 1;
    for(let i = 2; i <= n; i++)
    tot *= i;
    return tot;
 }



 let p = document.getElementById("prova");
console.log(p)

p.innerHTML = "Sto modificando p"






























