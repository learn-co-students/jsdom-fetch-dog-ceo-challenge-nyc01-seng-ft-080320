
document.addEventListener('DOMContentLoaded' , (e) => {
    // - on page load
    // - fetch the images using the url above ⬆
    // - parse the response as `JSON`
    // - JSON returns an array of 4 images
    // - add image elements to the DOM **for each  image in the array
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        let dogImages = json["message"]
        getImages(dogImages)
    })

    let getImages = (array) => {
        const div = document.querySelector('#dog-image-container')
        for(const index of array) {
            const img = document.createElement('img')
            img.src = index
            div.append(img);
        }
    }

    //- on page load, fetch all the dog breeds using the url above ⬆
    // see what JSON info is returned
    //- add the breeds to the page in an `<ul>` (take a look at the included `index.html`)
    const dogBreeds = () => {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        
        fetch(breedUrl)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            const breeds = json["message"] //breeds returns an object / return just keys
            addBreeds(breeds);
        })
    }
    
    const addBreeds = (object) => {
        const ul = document.querySelector('#dog-breeds')
        for(const key in object) {
            let li = document.createElement('li')
            li.classList.add(`${key}`)
            li.textContent = key;
            ul.append(li)
        }
    }
   
    dogBreeds();

    //-font color of a particular `<li>` changes _on click_. 
    //-When clicking a dog breed list items, the text color changes
    // addeventlistner for click and to matches to li class?

    const colorChange = () => {
        const ul = document.querySelector('#dog-breeds')
        ul.addEventListener('click', (e) => {
            
            if(e.target.matches('li')) {
                e.target.style.color = 'purple'
            }
        })
    }

    //-Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
    //-so that the user can filter breeds that start with a particular letter using a
    //-dropdown.

    //find select tag and add an addeventlistner 
    // when press firgure out how to get values to sort
    // use value to sort

    const filter = () => {
        const select = document.querySelector('#breed-dropdown');
        const options = Array.from(select.options); //creates an array of all the selection options        
        
        select.addEventListener('change', (e) => {
            let option = select.value;
            if(option === "a") {
                let allItems = document.querySelectorAll('li')
                allItems.forEach( (li) => {
                    li.style.display = "block"
                })
               dogList("a"); 
            } else if(option === "b") {
                let allItems = document.querySelectorAll('li')
                allItems.forEach( (li) => {
                    li.style.display = "block"
                })
                dogList("b");
            } else if(option === "c") {
                let allItems = document.querySelectorAll('li')
                allItems.forEach( (li) => {
                    li.style.display = "block"
                })
                dogList("c");
            } else if (option === "d") {
                let allItems = document.querySelectorAll('li')
                allItems.forEach( (li) => {
                    li.style.display = "block"
                })
                dogList("d");
            }

        }) 
    }

    const dogList = (letter) => {
        const li = document.querySelectorAll('li'); //get all li tags
        const ul = document.querySelector('ul')
        // Loop through all list items and hide ones that dont match filter
        for(const item of li) {
            if (item.textContent[0] !== letter) {
                //item.textContent = "";
                item.style.display = "none"
            }
        }

    }

    filter();
    colorChange();


})