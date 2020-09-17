console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
    fetchImages()
    fetchDogBreeds()
    clickHandler()
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const fetchImages = () => {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderDogImages(json.message))
}


const renderDogImages = dogImageURLs => {
    dogImageURLs.forEach(dogImageURL => {
        const imageDiv = document.createElement('div')
        imageDiv.innerHTML = `<img src="${dogImageURL}">`
        const imageContainer = document.querySelector('div#dog-image-container')
        imageContainer.append(imageDiv)
    })
    
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const fetchDogBreeds = () => {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breeds = Object.keys(json.message)
            renderDogBreeds(breeds)
            addSelectListener()
        })
}

const renderDogBreeds = breedCollection => {
    for(const breed of breedCollection){
        const li = document.createElement('li')
        li.textContent = `${breed}`

        breedList = document.querySelector('ul#dog-breeds')
        breedList.append(li)
    }
}

const clickHandler = () => {
    breedList = document.querySelector('ul#dog-breeds')
    breedList.addEventListener('click', function(e){
        if(e.target.matches('li')){
            e.target.style.color = "blue"
        }
    })
}

const addSelectListener = () => {
    let breedDropdown = document.querySelector('#breed-dropdown')
    breedDropdown.addEventListener('change', function(e){
        let selected = e.target.value
        if(selected === " "){
            renderDogBreeds(breeds)
        } else {
            breedList.innerHTML = ""
            renderDogBreeds(breeds.filter(breed => breed.startsWith(selected)))
        }
    })
}

