let randomNumber = Math.floor(Math.random() * 1000);

let base_url = `https://picsum.photos/id/${randomNumber}/info`
console.log(base_url)
// let url = "https://picsum.photos/id/0/info";

fetch(base_url) //Focus on the FETCH FIRST //HTML is just to display
  .then(function (result) {
    return result.json();
  })
  .then(function (json) {
    console.log(json);
    displayResults(json);
  });

  function displayResults(json){
    let pic = json.download_url
    let photographer = json.author
    let img = document.querySelector('img')
    let authorName = document.getElementById('name')
    img.src = pic 
    authorName.textContent = 'Photographer: ' + photographer
  }