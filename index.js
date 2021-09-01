console.log('hello world')

let message = document.querySelector('#message');


function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener('click', deleteMovie); 
    movie.appendChild(deleteBtn);

    document.querySelector('ul').appendChild(movie);
    inputField.value = "";
}

function deleteMovie(event) {
    console.log(event);
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!";
    revealMessage();
}

document.querySelector('form').addEventListener('submit', addMovie);

function crossOffMovie(event) {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains('checked')) {
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back!"
    }
    revealMessage();
}

function revealMessage() {
    setTimeout(function(){
        
    }, 3000)
}