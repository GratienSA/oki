// Passage en mode Nuit
function darkmode() {
    let header = document.querySelector(".Header");
    let body = document.body;
    let foot = document.querySelector("#footer");
    let box1 = document.querySelector(".container2");
    let box2 = document.querySelector(".container3");
    let box3 = document.querySelector(".container-user");
    let light = document.querySelector(".Dark-mode");
    let h1white = document.querySelectorAll(".Titre");
    let h2white = document.querySelectorAll(".sous-titre");
    let img = document.querySelectorAll("img");

    header.classList.toggle("logow");
    body.classList.toggle("bg-black");
    box1.classList.toggle("containerc2");
    box2.classList.toggle("containerc2");
    box3.classList.toggle("containerc2");
    foot.classList.toggle("footerw");
    light.classList.toggle("Light-mode");

    //Pour chaque élément fait ca
    h1white.forEach((element) => {
            element.classList.toggle("Titrew");
})  
    h2white.forEach((element) => {  
        element.classList.toggle("Titrew")
})
}
