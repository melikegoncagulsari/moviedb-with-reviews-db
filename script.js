const APILINK = 'your api link (freecodecamp fullstack alıştırma)';
const IMG_PATH = "your img path link (freecodecamp fullstack alıştırma)";
const SEARCHAPI = "your search api link (freecodecamp fullstack alıştırma)";

const main = document.getElementById("section");
const form = document.getElementById("form");
const query = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url) {
  fetch(url).then(res => res.json()).then(function(data) {
    console.log(data.results);
    data.results.forEach(element => {
      const div_card = document.createElement('div');
      div_card.setAttribute('class', 'card');

      const div_row = document.createElement('div');
      div_row.setAttribute('class', 'row');

      const div_column = document.createElement('div');
      div_column.setAttribute('class', 'column');

      const image = document.createElement('img');
      image.setAttribute('class', 'thumbnail');
      image.setAttribute('id', 'image');

      const title = document.createElement('h3');
      title.setAttribute('id', 'title');


      const center = document.createElement('center');

      title.innerHTML = `${element.title}<br><a href="movie.html?id=${element.id}&title=${element.title}" class="reviews">reviews</a>`;
      image.src = IMG_PATH + element.poster_path;

      center.appendChild(image);
      div_card.appendChild(center);
      div_card.appendChild(title);
      div_column.appendChild(div_card);
      div_row.appendChild(div_column);

      main.appendChild(div_row)
    })
  })
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});
