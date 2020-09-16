document.addEventListener('DOMContentLoaded', function(e){
    console.log('%c HI', 'color: firebrick')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogUl = document.querySelector('#dog-breeds')
    
    dogUl.addEventListener('click', function(e){
        // debugger
        if(e.target.matches('li')){
            e.target.style.color = 'red'
        }
    })
    
    const getDogPics = () => {
        fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
           createPics(json.message)
           
            // console.log(json)
        })
    }
    
    const getDogBreeds = () => {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            addDogBreeds(json.message)
           
        
            // console.log(json)
        })
    }
    
    const createPics = pics => {
        pics.forEach((pic) => {
            const dogUl = document.querySelector('#dog-breeds')
            const dogImageLi = document.createElement('li');
            dogImageLi.innerHTML = `
                <img class='dog-image' src=${pic}>
            `
            dogUl.append(dogImageLi)
        })
    }
    
    const addDogBreeds = (breeds) => {
        for(let breed in breeds){
            const dogUl = document.querySelector('#dog-breeds')
            const dogBreedLi = document.createElement('li');
            dogBreedLi.innerText = breed
            dogUl.append(dogBreedLi)
        }
    }
    
   
    
    getDogPics()
    getDogBreeds()
    
})

