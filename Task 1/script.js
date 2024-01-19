/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.getElementById("form");
const inputWeight = document.getElementById("search");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (inputWeight.value) {
    const lb = inputWeight.value * 2.2046;
    const g = inputWeight.value * 1000;
    const oz = inputWeight.value * 35.274;

    const pLb = document.createElement("p");
    pLb.textContent = `lb = ${lb.toFixed(2)} lbs`;

    const pG = document.createElement("p");
    pG.textContent = `g = ${g.toFixed(2)} g`;

    const pOz = document.createElement("p");
    pOz.textContent = `oz = ${oz.toFixed(2)} oz`;

    output.innerHTML = "";

    output.appendChild(pLb);
    output.appendChild(pG);
    output.appendChild(pOz);
  }
});
