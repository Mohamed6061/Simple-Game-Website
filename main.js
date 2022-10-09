let home = document.querySelector("#home");
let about = document.querySelector("#about");
let contact =document.querySelector("#contact");
let games = document.querySelector("#games");


function displayHome() {
    home.classList.toggle("hide")

    if (!about.classList.contains("hide")) {
        about.classList.add("hide")
    }
    if (!contact.classList.contains("hide")) {
        contact.classList.add("hide")
    }
    if (!games.classList.contains("hide")) {
        games.classList.add("hide")
    }
    
}

function displayAbout() {
    about.classList.toggle("hide")

    if (!home.classList.contains("hide")) {
        home.classList.add("hide")
    }
    if (!contact.classList.contains("hide")) {
        contact.classList.add("hide")
    }
    if (!games.classList.contains("hide")) {
        games.classList.add("hide")
    }
}
function displayContact() {
    contact.classList.toggle("hide")

    if (!home.classList.contains("hide")) {
        home.classList.add("hide")
    }
    if (!about.classList.contains("hide")) {
        about.classList.add("hide")
    }
    if (!games.classList.contains("hide")) {
        games.classList.add("hide")
    }
}
function displayGames() {
    games.classList.toggle("hide")

    if (!home.classList.contains("hide")) {
        home.classList.add("hide")
    }
    if (!contact.classList.contains("hide")) {
        contact.classList.add("hide")
    }
    if (!about.classList.contains("hide")) {
        about.classList.add("hide")
    }
}
