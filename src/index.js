
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
        const dogUl = document.querySelector('#dog-breeds');

        const dogDivA = document.createElement('div')
        dogDivA.classList.add('a-name')

        const dogDivB = document.createElement("div")
        dogDivB.classList.add('b-name')

        const dogDivC = document.createElement("div")
        dogDivC.classList.add('c-name')

        const dogDivD = document.createElement("div")
        dogDivD.classList.add('d-name')

        dogUl.append(dogDivA)
        dogUl.append(dogDivB)
        dogUl.append(dogDivC)
        dogUl.append(dogDivD)
        for(let breed in breeds){
        
            const dogBreedLi = document.createElement('li');
            dogBreedLi.innerText = breed;
            if(dogBreedLi.innerText[0] === 'a'){
                dogDivA.appendChild(dogBreedLi)
            } 
            if (dogBreedLi.innerText[0] === 'b'){
                dogDivB.appendChild(dogBreedLi)
            } 
            if (dogBreedLi.innerText[0] === 'c'){
                dogDivC.appendChild(dogBreedLi)
            } 
            if (dogBreedLi.innerText[0] === 'd'){
                dogDivD.appendChild(dogBreedLi)
            } 
        }
       
    }

    const breedSelectListener = (data) => {
        const dropDown = document.querySelector("#breed-dropdown")
            dropDown.addEventListener('change', function(e){
                    let namesToHide = document.querySelectorAll(`ul div:not(.${e.target.value}-name)`);
                    let namesToShow = document.querySelector(`div.${e.target.value}-name`);
                        for(let nameDiv of namesToHide){
                            nameDiv.style.display = "none"
                        }
                        namesToShow.style.display = 'inline'   
            })
        }
        


    getDogPics()
    getDogBreeds()
    breedSelectListener()
})

