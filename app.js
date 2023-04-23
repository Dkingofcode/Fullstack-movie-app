const API = 'https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=1ad1787c7f8f18467fb5d85ee8ff23cb&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=1ad1787c7f8f18467fb5d85ee8ff23cb&query=';

const Movies = document.getElementById("movies");
const form = document.getElementById("form");
const search = document.getElementById("query");


returnMovies(API);
function returnMovies(url){
    fetch(url).then(res => res.json()).then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
           const div = document.createElement('div'); 
           div.setAttribute('class', 'card');
           
           const div__row = document.createElement('div');
            div__row.setAttribute('class', 'row');

           const div__column = document.createElement('div');
            div__column.setAttribute('class', 'column');

           const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');

           const title = document.createElement('h3');
            title.setAttribute('id', 'title');


           const center = document.createElement('div');
             div.setAttribute('class', 'center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;
        
            center.appendChild(image);
            div.appendChild(center);
            div.appendChild(title);
            div__column.appendChild(div);
            div__row.appendChild(div__column);

            Movies.appendChild(div__row);
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    Movies.innerHTML = '';
    
    const searchItem = search.value;
     if(searchItem){
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
     }
})

















































