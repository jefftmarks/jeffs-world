// navbar variables

const bio = document.getElementById("bio");
const gators = document.getElementById("gators");
const games = document.getElementById("games");

const bioBlock = document.getElementById("bio-block");
const gatorsBlock = document.getElementById("gators-block");
const gamesBlock = document.getElementById("games-block");

const age = document.getElementById("age");

// navbar mouseover and mouseout

bio.addEventListener("mouseover", function() {
    gators.style.color="#fff";
    games.style.color="#fff";
    bio.style.textDecoration="underline";
    bio.textContent="BIO";
});
bio.addEventListener("mouseout", function() {
    gators.style.color="#000";
    games.style.color="#000";
    bio.style.textDecoration="none";
    bio.textContent="Bio";
});

gators.addEventListener("mouseover", function() {
    bio.style.color="#fff";
    games.style.color="#fff";
    gators.style.textDecoration="underline";
    gators.textContent="GATORS";
});
gators.addEventListener("mouseout", function() {
    bio.style.color="#000";
    games.style.color="#000";
    gators.style.textDecoration="none";
    gators.textContent="Gators";
});

games.addEventListener("mouseover", function() {
    bio.style.color="#fff";
    gators.style.color="#fff";
    games.style.textDecoration="underline";
    games.textContent="GAMES";
});
games.addEventListener("mouseout", function() {
    bio.style.color="#000";
    gators.style.color="#000";
    games.style.textDecoration="none";
    games.textContent="Games";
});

// nav click

bio.addEventListener("click", function() {
    bioBlock.style.display="block";
    gatorsBlock.style.display="none";
    gamesBlock.style.display="none";
});

gators.addEventListener("click", function() {
    gatorsBlock.style.display="block";
    bioBlock.style.display="none";
    gamesBlock.style.display="none";
});

games.addEventListener("click", function() {
    gamesBlock.style.display="block";
    bioBlock.style.display="none";
    gatorsBlock.style.display="none";
});

// age variables

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const yearsElapsed =  year - 1993;
const monthsElapsed = month - 1;
const daysElapsed = day - 14;
const ageInDays = daysElapsed + (30.437 * monthsElapsed) + (365.25 * yearsElapsed);
const exactAge = document.getElementById("age");
exactAge.textContent = ageInDays / 365.25;