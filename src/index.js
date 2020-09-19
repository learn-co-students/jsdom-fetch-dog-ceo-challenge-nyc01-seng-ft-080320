
document.addEventListener('DOMContentLoaded', function() {
    const dogDiv = document.getElementById('dog-image-container')
    
    function getImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(function(resp){
        return resp.json()
      }).then(function(json){
        const array = json 
        for(const img of array['message']){
          const newPic = document.createElement('img')
          newPic.src = img
          dogDiv.append(newPic)
        }
      })
    }
    const dogUl = document.getElementById('dog-breeds')
    
    function getDogBreeds(){
      fetch('https://dog.ceo/api/breeds/list/all')
      .then(function(resp){
        return resp.json()
      }).then(function(json){
        renderDogs(json)
      })
    }
  
    function renderDogs(dogArray){
      for (const breed in dogArray['message']){
        const newLi = document.createElement('li')
        newLi.innerText = breed
        newLi.dataset.breed = breed
        dogUl.append(newLi)
      }
    }
    getImages()
    getDogBreeds()
    
    dogUl.addEventListener('mouseover', e => {
      dogUl.style.cursor = "pointer"
    })
    dogUl.addEventListener('click', e => {
      if (e.target.dataset.breed){
        e.target.style.color = 'blue'
      }
    })
  
    const selector = document.getElementById('breed-dropdown')
    selector.addEventListener('change', e => {
      const dogLiArray = Array.from(dogUl.children)
      for (const dogLi of dogLiArray){
  
      }
      if (e.target.value === "a"){
        
      } else if( e.target.value === "b"){
        
      } else if( e.target.value === "c"){
        
      } else if( e.target.value === "d"){
        
      }
    })
  
  
  })