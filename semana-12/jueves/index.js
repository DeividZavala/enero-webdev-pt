let list = document.getElementById("list");
let img = document.querySelector("img");
let h2 = document.querySelector("h2");
let specie = document.getElementById("specie");
let status = document.getElementById("status");
let episodes = document.getElementById("episodes");
const base_url = "https://rickandmortyapi.com/api";
let ctx = document.getElementById("chart").getContext("2d");

function setCharacter(e) {
  console.log(e.target.dataset.id);
  let id = e.target.dataset.id;
  axios.get(`${base_url}/character/${id}`).then(res => {
    let char = res.data;
    h2.innerText = char.name;
    img.src = char.image;
    specie.innerText = char.species;
    episodes.innerText = char.episode.length;
    status.innerText = char.status;
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

axios.get("https://api.iextrading.com/1.0/stock/amzn/chart").then(res => {
  let data = res.data;
  const stockLabels = data.map(element => element.date);
  const stockPrice = data.map(element => element.close);
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: stockLabels,
      datasets: [
        {
          label: "Stock Chart",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: stockPrice
        }
      ]
    }
  });
});
