const form = document.querySelector('#form');
const camSelect = document.querySelector('#cam-select')
const date = document.querySelector('#date');
const container = document.querySelector('#container')


const handleSubmit = (e) => {
  e.preventDefault()
  container.innerHTML = ''
  const URI = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date.value}&camera=${camSelect.value.toLowerCase()}&api_key=DEMO_KEY`

  console.log(camSelect.value)
  console.log(date.value)
  console.log(URI)
  fetch(URI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const img = data.photos.map(photo => photo.img_src);
      img.forEach(photo => {
        const image = new Image()
        image.src = photo
        container.appendChild(image)
      })
      
      // console.log(JSON.stringify(data.photos.map((photo) => photo.img_src))
    });
}


form.addEventListener('submit', handleSubmit)