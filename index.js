// 0 - récupérer <div id="grille">
const baliseGrille = document.getElementById("grille");

for (let i = 1; i <= 49; i++) {
    /* 1 - Créer une balise span */
    const baliseNew = document.createElement("span");

    /* 2 - Lui ajouter la classe "numero" (classList) */
    baliseNew.classList.add("numero");

    /* 3 -Définir le texte de la balise avec l'indice i */
    baliseNew.innerText = i;

    /* 4 - L'insérer dans <div id="grille"> */
    baliseGrille.appendChild(baliseNew);
}
// 0 - récupérer <div id="grille">
const baliseGrillechance = document.getElementById("grillechance");

for (let i = 1; i <= 10; i++) {
    /* 1 - Créer une balise span */
    const balisespan = document.createElement("span");

    /* 2 - Lui ajouter la classe "numero" (classList) */
    balisespan.classList.add("numero");

    /* 3 -Définir le texte de la balise avec l'indice i */
    balisespan.innerText = i;

    /* 4 - L'insérer dans <div id="grille"> */
    baliseGrillechance.appendChild(balisespan);
}
const mesnumeros = document.querySelectorAll("#grille .numero, #grillechance .numero");
console.log(mesnumeros);
for (let i = 0; i < mesnumeros.length; i++) {
    mesnumeros[i].addEventListener("click", function () {
        mesnumeros[i].classList.toggle("selected");
    });
}
/* for (let i = 1; i <= 10; i++) {
    baliseGrillechance.innerHTML = baliseGrillechance.innerHTML + <span class="numero">${i}</span>
}*/
var tabnumeros = [];
function getRandomInt(max) {
    let numeros
    do {
        numeros = Math.ceil(Math.random() * max);
    } while (tabnumeros.includes(numeros));
    tabnumeros.push(numeros);
    return numeros;
}

const baliselancer = document.getElementById("btnlancer");
baliselancer.addEventListener("click", function () {
    const balisenumeros = document.getElementById("numeros")
    balisenumeros.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        balisenumeros.innerHTML = balisenumeros.innerHTML + `<span class="numero">${getRandomInt(49)}</span>`;
    }

    tabnumeros = [];

    const balisenumeroschance = document.getElementById("chance");
    balisenumeroschance.innerHTML = "";
    for (let i = 1; i <= 1; i++) {
        balisenumeroschance.innerHTML = balisenumeroschance.innerHTML + `<span class="numero chance">${getRandomInt(10)}</span>`;
    }
});
const balisereset = document.getElementById("btnreset");
balisereset.addEventListener("click", function () {

    const balisenumeros = document.getElementById("numeros")
    balisenumeros.innerHTML = "";

    const balisenumeroschance = document.getElementById("chance");
    balisenumeroschance.innerHTML = "";

    const mesnumeros = document.querySelectorAll("#grille .numero, #grillechance .numero");
    for (let i = 0; i < mesnumeros.length; i++) {
        mesnumeros[i].classList.remove("selected");
    }
});