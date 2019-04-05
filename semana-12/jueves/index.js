let list = document.getElementById("list");
let img = document.querySelector("img");
let h2 = document.querySelector("h2");
let specie = document.getElementById("specie");
let status = document.getElementById("status");
let episodes = document.getElementById("episodes");
const base_url = "https://rickandmortyapi.com/api";

function setCharacter(e) {
  console.log(e.target.dataset.id);
  let id = e.target.dataset.id;
  axios.get(`${base_url}/character/${id}`).then(res => {
    let char = res.data;
    h2.innerText = char.name;
  });
}

axios.get(`${base_url}/character`).then(response => {
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
