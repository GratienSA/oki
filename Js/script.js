// Passage en mode Nuit
let firstLet = document.getElementsByClassName("logo");
let header = document.querySelector("header");
let body = document.body;
let box1 = document.querySelector(".container2");

console.log(header)

function darkmode() {
    header.classList.toggle("logow");
    body.classList.toggle("bg-black");
    box1.classList.toggle("containerc2");
}
