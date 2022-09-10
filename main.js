import "./style.css";
let url = 'https://picsum.photos/v2/list?page=2&limit=100';
let btn = document.getElementById('btn');
let app = document.getElementById('app');
let img = document.getElementById('img');

btn. addEventListener('click', function() {
  fetch(url)
  .then((response) => {
    return response.json();

  })
  .then(() => {
    then((data));
  })
  
    let picture = data;
    const index = Math.floor(Math.random() = 101);

    img.src = `${picture[index].download_url}`;
    const img = document.querySelector("img"); 
    img.src = "https://picsum.photos/200/301";
  }
)



