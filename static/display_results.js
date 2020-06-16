  const api_url = 'http://www.omdbapi.com/?i=';
  const api_key = '&apikey=764d52fe';
  const api_img_url = 'https://api.themoviedb.org/3/find/';
  const api_img_key = '?api_key=3866f47ea33d41d08c3218112644fe01&language=en-US';
  var imdblink = 'https://www.imdb.com/title/';

  var element = document.getElementById('id');
  var id = element.innerText || element.textContent;

  id = String(id);
  console.log(id);
  var url1 = api_img_url + id + api_img_key + '&external_source=imdb_id';
  var url2 = api_url + id + api_key;

  const loadMovie = async () => {
        try{
            const res1 = await fetch(url1);
            const obj1 = await res1.json();

            const res2 = await fetch(url2);
            const obj2 = await res2.json();

            console.log(obj1, obj2);
            displayInfo(obj1, obj2);
          }catch(err){
        console.log(err);
        console.log("Failed to fetch API request");
      }
  };
      const displayInfo = (info1, info2) => {
          var htmlString = `<img id="poster" src=https://image.tmdb.org/t/p/w500${info1['movie_results'][0]['poster_path']} />"`;
          var htmlTitle = `<h1><strong>${info1['movie_results'][0]['original_title']} (${info2['Year']}) - ${info2['Rated']}</strong></h1>`;
          var htmlsub1 = `<p><strong>Genre: </strong>"${info2['Genre']}"</p>`;
          var htmlsub2 = `<p><strong>Directed by:</strong> ${info2['Director']}</p>`;
          var htmlsub3 = `<p><strong>Starring: </strong>${info2['Actors']}</p>`;
          var htmlsub4 = `<p><strong>Plot: </strong>${info1['movie_results'][0]['overview']}</p>`;
          var htmlsub5 = `<p><strong>Produced by: ${info2['Production']}</strong></p>`;
          var htmlsub6 = `<img src="../static/images/metacritic.png" width="70"/><p>${info2['Ratings'][2]['Value']}</p>`;
          var htmlawardtext = `<p><strong>Awards: ${info2['Awards']}</strong></p>`;

          imdblink = imdblink + id + "/";
          imdbhtml = `<a href=${imdblink}>Click here for IMDB page</a>`;

          postercontainer.innerHTML = htmlString;
          texttitle.innerHTML = htmlTitle;
          textsub1.innerHTML = htmlsub1;
          textsub2.innerHTML = htmlsub2;
          textsub3.innerHTML = htmlsub3;
          textsub4.innerHTML = htmlsub4;
          textsub5.innerHTML = htmlsub5;
          textsub6.innerHTML = htmlsub6;
          awardtext.innerHTML = htmlawardtext;
          imdb.innerHTML = imdbhtml;
      }
      loadMovie();
