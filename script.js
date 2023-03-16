const shelfElements = []

const shelf = document.querySelector("#shelf");
const template = document.querySelector("#card");

shelfElements.forEach(elem => {
    console.log(elem);
    
    card = document.importNode(template.content, true);
    
    card.querySelector("img").src = elem.pic;
    card.querySelector("h1").textContent = elem.title;
    const a = card.querySelectorAll("a");
    a[0].href = elem.linkChallenge;
    a[1].href = elem.linkSolution;

    shelf.appendChild(card);
})