console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener("DOMContentLoaded", e =>{
   let challenge1 = fetch(imgUrl).then(resp => resp.json()).then(json => photoBomb(json.message));
   let challenge2 = fetch(breedUrl).then(resp => resp.json()).then(json => breed(json.message))
   clickHandler();
   changeHandler();

})

photoBomb = (photoArray) => {
    photoArray.forEach(photo =>{
        const photoHolder = document.getElementById("dog-image-container");
        const image = document.createElement("img");
        image.style.height= "250px";
        image.src= photo;
        photoHolder.appendChild(image);
    })

}

breed = (breeds) => {
    
    const breedBody = document.getElementById("dog-breeds");
    const breedUl = document.createElement("ul");
    for (const breed in breeds) {
        const newLi = document.createElement("li");
        newLi.textContent = breed;
        newLi.dataset.letter = breed[0];
        if (breeds[breed].length > 0){
            const inBreed = document.createElement("ul");
            for (const type of breeds[breed] ){
                const typeLi = document.createElement("li");
                typeLi.textContent = type
                
                inBreed.appendChild(typeLi)
            }
            newLi.append(inBreed);
        };

        breedUl.append(newLi)
    }
    breedBody.append(breedUl)
}

clickHandler = () =>{
    document.addEventListener('click', e =>{
        if (e.target.tagName === "LI"){
            colorChange(e.target);
            console.dir("wooot");
        }
    })
}

colorChange = (ele) => {
    if (ele.style.color === "red"){
        ele.style.color = "black"
    }else{
        ele.style.color = "red"
    }
}

changeHandler = () =>{
    document.addEventListener('change', e => {    
        if (e.target.name === "select-breed"){
            const lis = document.querySelectorAll("li")
            for (const li of lis){
                
                if (li.dataset.letter && li.dataset.letter !== e.target.value){
                    li.style.display = "none";
                }
                if (li.dataset.letter && li.dataset.letter === e.target.value) {
                    li.style.display = "list-item";
                }

            }
        }

    })
}