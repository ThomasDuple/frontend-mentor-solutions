const shelfElements = [
    {
        pic: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/d0bm3lh8bp36gyi3jiop.jpg",
        title: "Product preview card component",
        linkChallenge: "https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa",
        linkSolution: "./product-preview-card-component/index.html"
    }
]

const shelf = document.querySelector("#shelf");
const template = document.querySelector("#card");

shelfElements.forEach(elem => {
    console.log(elem);
    
    card = document.importNode(template.content, true);
    
    card.querySelector("img").src = elem.pic;
    card.querySelector("h1").textContent = elem.title;
    const a = card.querySelectorAll("a");
    a[0].href = elem.linkSolution;
    a[1].href = elem.linkChallenge;

    shelf.appendChild(card);
})