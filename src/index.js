console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const allBreeds = [];

const fetchDogPics = () => {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderPics(json));
}

const renderPics = (jsonResponse) => {
  picsArray = jsonResponse.message;
  
  for (const pic of picsArray) {
    const imgDiv = document.getElementById('dog-image-container')
    const newImg = document.createElement('img');
    newImg.src = pic;
    imgDiv.append(newImg);
  }
}

const fetchDogBreeds = () => {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreeds(json));
}

const renderBreeds = (jsonResponse) => {
  const breedsHash = jsonResponse.message;
  const breedUl = document.getElementById('dog-breeds');
  
  for (const breed in breedsHash) {
    if (breedsHash[breed].length === 0) {
      const newBreed = document.createElement('li');
      newBreed.textContent = breed;
      breedUl.append(newBreed);
      allBreeds.push(newBreed.textContent);
    } else {
      for (const subBreed of breedsHash[breed]) {
        const newBreed = document.createElement('li');
        newBreed.textContent = subBreed + ' ' + breed;
        breedUl.append(newBreed);
        allBreeds.push(newBreed.textContent);
      }
    }
  }
}

const clickHandler = () => {
  document.addEventListener('click', e => {
    if (e.target.matches('li')) {
      e.target.style.color='firebrick';
    } else if (e.target.matches('#breed-dropdown')) {
        const breedUl = document.getElementById('dog-breeds');
        const letter = e.target.value;

        while (breedUl.firstChild) {
          breedUl.removeChild(breedUl.firstChild);
        }
        
        filterBreeds(allBreeds, letter);     
    }
  })
}

const filterBreeds = (allBreeds, letter) => {
  const selectedBreeds = [];
  for (const breed of allBreeds) {
    if (breed.charAt(0) == letter) {
      selectedBreeds.push(breed);
    }
  }

  const breedUl = document.getElementById('dog-breeds');

  for (const breed of selectedBreeds) {
    const newBreed = document.createElement('li');
    newBreed.textContent = breed;
    breedUl.append(newBreed);
  }
}

fetchDogPics();
fetchDogBreeds();
clickHandler();