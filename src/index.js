
document.addEventListener('DOMContentLoaded', function(e){
    console.log('%c HI', 'color: firebrick')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogUl = document.querySelector('#dog-breeds')
    
    dogUl.addEventListener('click', function(e){
        if(e.target.matches('li')){
            e.target.style.color = 'red'
        }
    })
    
    const getDogPics = () => {
        fetch(`${imgUrl}`)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
           createPics(json.message)
        })
    }
    
    const getDogBreeds = () => {
        fetch(`${breedUrl}`)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            addDogBreeds(json.message)
        })
    }
    
    const createPics = pics => {
        pics.forEach((pic) => {
            const dogUl = document.querySelector('#dog-image-container')
            const dogImageLi = document.createElement('p');
            dogImageLi.innerHTML = `
                <img class='dog-image' src=${pic}>
            `
            dogUl.append(dogImageLi)
        })
    }
    
    const addDogBreeds = (breeds) => {
        for(let breed in breeds){
            const dogUl = document.querySelector('#dog-breeds');
            const dogBreedLi = document.createElement('li');
            dogBreedLi.innerText = breed;
            dogUl.append(dogBreedLi);
            if(dogBreedLi.innerText[0] === 'a'){
                dogBreedLi.classList.add('a-name')
            } else if (dogBreedLi.innerText[0] === 'b'){
                dogBreedLi.classList.add('b-name')
            } else if (dogBreedLi.innerText[0] === 'c'){
                dogBreedLi.classList.add('c-name')
            } else if (dogBreedLi.innerText[0] === 'd'){
                dogBreedLi.classList.add('d-name')
            } 
        }
       
    }

    const breedSelectListener = (data) => {
        const dropDown = document.querySelector("#breed-dropdown")
            dropDown.addEventListener('change', function(e){
               
                    let namesToHide = document.querySelectorAll(`li:not(.${e.target.value}-name)`);
                    let namesToShow = document.querySelectorAll(`li.${e.target.value}-name`);
                    for(let dog of namesToHide){
                        dog.style.visibility = 'hidden'
                    }
                    for(let dog of namesToShow){
                        dog.style.visibility = 'visible'
                    }
            })
        }
        


    getDogPics()
    getDogBreeds()
    breedSelectListener()
})

