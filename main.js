customReset();

const form = document.getElementById('un1');
const name = document.getElementById('nameinput');
const email = document.getElementById('emailin');
const phone = document.getElementById('phonein');
const date = document.getElementById('datein');

const opener = document.querySelector(".level");
const scroller = document.querySelector(".scroll");

opener.addEventListener("click", () => {
    scroller.classList.toggle("change")
});

const opener2 = document.querySelector(".player");
const scroller2 = document.querySelector(".scroll2");

opener2.addEventListener("click", () => {
    scroller2.classList.toggle("changes")
});

const char = document.querySelector(".mag");
const lev = document.querySelector(".player2");

char.addEventListener("click", () => {
    lev.classList.toggle("changes2")
});
const char2 = document.querySelector(".wil");
const lev2 = document.querySelector(".player3");

char2.addEventListener("click", () => {
    lev2.classList.toggle("changes3")
});
const char3 = document.querySelector(".bob");
const lev3 = document.querySelector(".player4");

char3.addEventListener("click", () => {
    lev3.classList.toggle("changes4")
});


const lvlch = document.querySelector(".beg");
const lvlyry = document.querySelector(".level2");

lvlch.addEventListener("click", () => {
    lvlyry.classList.toggle("changed")
});

const lvlch2 = document.querySelector(".int");
const lvlyry2 = document.querySelector(".level3");

lvlch2.addEventListener("click", () => {
    lvlyry2.classList.toggle("changed2")
});


const lvlch3 = document.querySelector(".prof");
const lvlyry3 = document.querySelector(".level4");

lvlch3.addEventListener("click", () => {
    lvlyry3.classList.toggle("changed3")
});





function customReset(){
    if(sessionStorage.getItem('last_entry')){
        var element = document.getElementById("nameinput");
        element.value = sessionStorage.getItem('last_entry');

        var element = document.getElementById("emailin");
        element.value = sessionStorage.getItem('last_entry');

        var element = document.getElementById("phonein");
        element.value = sessionStorage.getItem('last_entry');

        var element = document.getElementById("datein");
        element.value = sessionStorage.getItem('last_entry');
    }
}

function setStorage(element){
    sessionStorage.setItem('last_entry',element.value);
}