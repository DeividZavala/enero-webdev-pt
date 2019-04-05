let list = document.getElementById("list");
let img = document.querySelector("img");
let h2 = document.querySelector("h2");
let specie = document.getElementById("specie");
let status = document.getElementById("status");
let episodes = document.getElementById("episodes");

function setCharacter(e) {
  let id = e.target;
}

axios.get("https://rickandmortyapi.com/api/character").then(response => {
  console.log(response.data.results);
  let characters = response.data.results;
  characters.forEach(character => {
    let li = document.createElement("li");
    li.setAttribute("data-id", character.id);
    li.innerText = character.name;
    li.onclick = setCharacter;
    list.appendChild(li);
  });
});
