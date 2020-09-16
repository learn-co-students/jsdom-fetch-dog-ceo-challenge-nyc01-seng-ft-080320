document.addEventListener("DOMContentLoaded", ()=>{

  function getImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
      .then(resp => resp.json())
      .then(json => showDogs(json));
  }
  function getBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(resp => resp.json())
      .then(json => dogBreeds(json));
  }

  function showDogs(dogs) {
    dogs['message'].forEach(dogImg => {
      const dogContainer = document.querySelector('#dog-image-container')
      const newDog = document.createElement('img')
      newDog.src = dogImg
      dogContainer.append(newDog)
    })
  }

  function dogBreeds(dogs) {
    const dogBreedList = document.querySelector('#dog-breeds')
    for(let dogBreed in dogs['message']) {
      const newDog = document.createElement('li')
      newDog.innerText = dogBreed
      dogBreedList.append(newDog)
    }
  }

  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') { 
      e.target.style.color = "pink"
    }
  })

  document.querySelector('#breed-dropdown').addEventListener('change', (e) => {
    const selectedLetter = e.target.value
    sortDogs(selectedLetter)
  })

  function sortDogs(letter) {
    const dogList = document.querySelectorAll('li')
    for(let dog of dogList) {
      if(letter === 'all'){
        dog.style.display = ""
      } else if (dog.innerText[0] !== letter){
        dog.style.display = "none"
      } else {
        dog.style.display = ""
      }
    }
  }

  getImages()
  getBreeds()
})