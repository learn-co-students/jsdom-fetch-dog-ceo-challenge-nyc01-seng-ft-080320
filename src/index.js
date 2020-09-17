let breeds = []
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
            addBreedSelectListener()
        
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
            


            // sortBreeds;
            // const dropDown = document.querySelector("#breed-dropdown")
            // if(dropDown.value === 'a'){
            //     document.querySelectorAll('.a-name')
            // } else if(dropDown.value ===  'b'){
            //         document.querySelectorAll('.b-name')
            // } else if(dropDown.value ===  'c'){
            //     document.querySelectorAll('.c-name')
            //     }
            // }
        }
       
    }
    function selectBreedsStartingWith(letter) {
        addDogBreeds(breeds.filter(breed => breed.startsWith(letter)));
      }
      
      function addBreedSelectListener() {
        let breedDropdown = document.querySelector('#breed-dropdown');
        breedDropdown.addEventListener('change', function (event) {
          selectBreedsStartingWith(event.target.value);
        });
      }

    getDogPics()
    getDogBreeds()
    
})

