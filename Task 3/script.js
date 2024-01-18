/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const btn = document.getElementById("btn");
const output = document.getElementById("output");

const usersAPI = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const usersData = await response.json();

    output.innerHTML = "";

    usersData.forEach((user) => {
      const p = document.createElement("p");
      p.textContent = `User: ${user.login}`;
      output.appendChild(p);
    });
  } catch (error) {
    console.error(error);
  }
};

btn.addEventListener("click", () => {
  usersAPI();
});
