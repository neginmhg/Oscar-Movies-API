
console.log('fetching data')

const movieList = document.getElementById('movieList');
const searchBar = document.getElementById('searchBar');
let data = [];


searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredMovies = data.filter((nominee) => {

    return (
    typeof nominee.entity == "string" &&
    (nominee.entity.toLowerCase().indexOf(searchString) > -1 ||
    nominee.category.toLowerCase().indexOf(searchString) > -1));
  });
  displayMovies(filteredMovies);
});


const loadMovies = async () => {
  try{
    const response = await fetch("/api/movies");
    const obj = await response.json();
    data = obj['movies'];
    console.log(data);

    displayMovies(data);

    } catch(err) {
      console.log(err);
      console.log("LOAD ERROR");
      }
};

const displayMovies = (movies) => {
  var i;
  var htmlString = '';
  var movie;

  for(i=0; i<10 && i<movies.length-1; i++){
    movie = movies[i];
    htmlString =  htmlString + `
          <a href="/searchresult?id=${movie.id}">
              <p><strong>${movie.entity} (${movie.year})</strong></p>
              <p>nominated for ${movie.category}</p>
          </a>
        `;
    }
    myDropdown.innerHTML = htmlString;
};

loadMovies();
