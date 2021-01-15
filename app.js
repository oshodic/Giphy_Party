//console.log("Let's get this party started!");

let searchBar = document.querySelector("#searchBar");
let submitBtn = document.querySelector("#submitBtn");
let appendGifs = document.querySelector("#appendGifs");
const searchForm = document.querySelector("#searchForm");



searchForm.addEventListener("submit", function(e){
  e.preventDefault();

  newGif = searchBar.value;

  async function makeRequest(newGif) {
    const getMeme = await axios.get('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC', { params: {newGif} });
    
    return getMeme.data.id;
  }

  appendGifs.append(makeRequest(newGif));
  searchBar.value = '';

});




