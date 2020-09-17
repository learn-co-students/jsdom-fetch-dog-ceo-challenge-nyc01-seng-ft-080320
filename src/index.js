let breeds = [];

document.addEventListener('DOMContentLoaded', function(e) {
fetchImages();
fetchBreeds();
});

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
        .then(response => response.json())
        .then(results => {     
        results.message.forEach(image => addImage(image))
        });
    }

function addImage(dogPicUrl) {
    const dogImageContainer = document.querySelector('#dog-image-container');
    const imageTag = document.createElement('img');
    imageTag.src = dogPicUrl;
    dogImageContainer.appendChild(imageTag);
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
        breeds = Object.keys(json.message);
        updateBreedList(breeds);
        addBreedSelectListener();
    });   
}

function addBreed(breed) {
    let breedUl = document.querySelector('#dog-breeds');
    let breedLi = document.createElement('li');
    breedLi.innerText = breed;
    breedLi.style.cursor = 'pointer;'
    breedUl.appendChild(breedLi);
    breedLi.addEventListener('click', e => {
        e.target.style.color = "red";
    })
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function updateBreedList(breeds) {
    let breedUl = document.querySelector('#dog-breeds');
    removeChildren(breedUl);
    breeds.forEach(breed => addBreed(breed))
}

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedsSelectListener() {
    let breedDropdown = document.querySelector("#breed-dropdown");
    breedDropdown.addEventListener('change', function(e) {
        selectBreedsStartingWith(e.target.value)
    });
}

