const txtBox = document.getElementById("txtBox");
const submit = document.getElementById("submitBtn");
const wynik = document.getElementById("wynik");
let liczba;
let obliczenia;

function convert(){
    liczba = Number(txtBox.value);

    obliczenia = 2 * (liczba * liczba);

    wynik.textContent = "Na tej warstwie może być maksymalnie: " + obliczenia + " e‾"; 

}