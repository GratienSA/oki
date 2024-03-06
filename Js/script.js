// Passage en mode Nuit
let firstLet = document.getElementsByClassName("logo");
let header = document.querySelector("header");
let body = document.body;
let box1 = document.querySelector(".container2");
let box2 = document.querySelector(".container3");
let box3 = document.querySelector(".container-user");
let titrebox = document.querySelectorAll("texte");


function darkmode() {
    header.classList.toggle("logow");
    body.classList.toggle("bg-black");
    box1.classList.toggle("containerc2");
    box2.classList.toggle("containerc2");
    box3.classList.toggle("containerc2");
    titrebox[i].classList.toggle("Titrew");
}
console.log(titrebox)
