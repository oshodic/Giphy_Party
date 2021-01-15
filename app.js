//console.log("Let's get this party started!");

let searchBar = document.querySelector("#searchBar");
let submitBtn = document.querySelector("#submitBtn");
let appendGifs = document.querySelector("#appendGifs");
const searchForm = document.querySelector("#searchForm");



searchForm.addEventListener("submit", async function(e){
  e.preventDefault();

  newGif = searchBar.value;
  const response = await makeRequest(newGif);

  const gifImg = document.createElement('img');
  gifImg.src = response;

  appendGifs.append(gifImg);
  searchBar.value = '';

});

async function makeRequest(newGif) {
  const getMeme = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC`, { params: {q: newGif} });
  
  console.log(getMeme);

  return getMeme.data.data[0].images.original.url;
}




