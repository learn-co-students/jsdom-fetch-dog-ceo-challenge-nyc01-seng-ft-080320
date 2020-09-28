console.log('%c HI', 'color: firebrick')

// Add JavaScript so that:

// - on page load
// - fetch the images using the url above ⬆️
// - parse the response as `JSON`
// - add image elements to the DOM **for each**🤔 image in the array

document.addEventListener('DOMContentLoaded', e => {
    loadImages()
    loadBreedOptions()
})

const loadImages = () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => {
            data.message.forEach(image => addImage(image))
        })
}

const addImage = (dogPicUrl) => {
    const container = document.querySelector('#dog-image-container')
    const newImageEl = document.createElement('img')
    newImageEl.src = dogPicUrl
    container.append(newImageEl)
}

const loadBreedOptions = () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {

        breeds = Object.keys(results.message);
      updateBreedList(breeds);
      addBreedSelectListener();
    });
}


function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }  