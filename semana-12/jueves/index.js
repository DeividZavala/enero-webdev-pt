let list = document.getElementById("list");

axios.get("https://rickandmortyapi.com/api/character").then(response => {
  console.log(response.data.results);
  let characters = response.data.results;
  characters.forEach(character => {
    let li = document.createElement("li");
    li.innerText = character.name;
    list.appendChild(li);
  });
});
