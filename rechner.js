let eingabe = 0;

function ergebnis(){
    let zwischenSpeicher = document.getElementById("eingabeFeld");
    let ergebnis = eval(zwischenSpeicher.innerHTML);
    zwischenSpeicher.innerHTML = ergebnis;
}

function löschen(){
    document.getElementById("eingabeFeld").innerHTML  = "";
}





function eingeben1(){
    eingabe += 1;
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += 1;
}


function eingeben2(){
    eingabe += 2;
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += 2;
}


function eingeben3(){
    eingabe += 3;
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += 3;
}


function eingebenPlus(){
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += "+";
}


function eingeben4(){
    eingabe + 4;
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += 4;
}


function eingeben5(){
    eingabe + 5;
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += 5;
}


function eingeben6(){
    eingabe + 6;
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += 6;
}


function eingebenMinus(){
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += "-";
}


function eingeben7(){
    eingabe + 7;
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += 7;
}


function eingeben8(){
    eingabe + 8;
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += 8;
}


function eingeben9(){
    eingabe + 9;
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += 9;
}





function eingeben0(){
    eingabe + 0;
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += 0;
}


function eingebenMal(){
    eingabe + 1;
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += "*";
}


function eingebenGleich(){
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += "=";
}


function eingebenTeilen(){
    console.log(eingabe);
    document.getElementById("eingabeFeld").innerHTML += "/";
}