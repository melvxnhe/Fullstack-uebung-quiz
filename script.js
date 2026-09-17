
const button = document.querySelector(".startbutton");
const header = document.querySelector(".Header");
const rainer = document.querySelector(".RainerContainer");
const author = document.querySelector(".Author");

const frage1 = document.querySelector(".Frage1");
const q1a1   = document.querySelector(".Q1A1 button");
const q1a2   = document.querySelector(".Q1A2 button");
const q1a3   = document.querySelector(".Q1A3 button");

let q1 = false;
let q2 = false;
let q3 = false;
let q4 = false;

let AntwortA1 = false;
let AntwortB1 = false;
let AntwortC1 = false;
let AntwortD1 = false;

let AntwortA2 = false;
let AntwortB2 = false;
let AntwortC2 = false;
let AntwortD2 = false;

let AntwortA3 = false;
let AntwortB3 = false;
let AntwortC3 = false;
let AntwortD3 = false;

let AntwortA4 = false;
let AntwortB4 = false;
let AntwortC4 = false;
let AntwortD4 = false;



button.addEventListener("click", function() {

header.textContent = "1) Drogen & Sinologen";
button.style.display = "none";
rainer.style.display = "none";
author.style.display = "none";

frage1.style.visibility = "visible";
q1a1.style.visibility = "visible";
q1a2.style.visibility = "visible";
q1a3.style.visibility = "visible";
let q1 = true;
})
 let geantwortet = false;
document.addEventListener("click", function(event) {

   
    
    if(!geantwortet) {
if(event.target === q1a1) {

    q1a1.style.backgroundColor ="green";
        geantwortet = true;

} else if(event.target === q1a2 || event.target == q1a3) {

    const targets = event.target;

targets.style.backgroundColor = "red";
    geantwortet = true;

}

}else;


})
