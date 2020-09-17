document.addEventListener("DOMContentLoaded", function() {
    let breeds = [];
    fetchDogImages();
    fetchBreeds();
    addResetButton();
});

const fetchDogImages = () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => json.message.forEach(dogUrl => renderDog(dogUrl)));
};

const renderDog = (dogUrl) => {
    let dogKennel = document.querySelector("div#dog-image-container");
    let dogImage = document.createElement("img");
    dogImage.src = dogUrl;
    dogKennel.append(dogImage);
};

const fetchBreeds = () => {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breeds = Object.keys(json.message);
            breeds.forEach(breed => renderBreed(breed));
            addDropDownListener();
        });
};

const renderBreed = (breed) => {
    let breedUl = document.getElementById("dog-breeds");
    let newBreedLi = document.createElement("li");
    newBreedLi.innerText = breed;
    newBreedLi.addEventListener("click", (e) => {
        changeColor(e.target);
    });
    breedUl.append(newBreedLi);
};

const changeColor = (element) => {
    if (element.style.color != "red") {
        element.style.color = "red";
    } else {
        element.style.color = "black";
    }
};

const addDropDownListener = () => {
    let dropDown = document.getElementById("breed-dropdown");
    dropDown.addEventListener("change", (e) => {
        let option = e.target.value;
        let sortedBreeds = sortBreeds(option);
        let breedUl = document.getElementById("dog-breeds");
        breedUl.innerHTML = "";
        sortedBreeds.forEach(breed => renderBreed(breed));
    });
};

const sortBreeds = (optionSelected) => {
    return breeds.filter(breed => breed[0] === optionSelected);
};

const addResetButton = () => {
    let dropDown = document.getElementById("breed-dropdown");
    let resetButton = document.createElement("button");
    resetButton.innerText = "Reset List";
    resetButton.addEventListener("click", function() {
        let breedUl = document.getElementById("dog-breeds");
        breedUl.innerHTML = "";
        breeds.forEach(breed => renderBreed(breed));
    })
    dropDown.insertAdjacentElement("afterend", resetButton);
};
