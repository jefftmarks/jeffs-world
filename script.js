const bio = document.getElementById("bio");
const gators = document.getElementById("gators");
const games = document.getElementById("games");

bio.addEventListener("mouseover", function() {
    gators.style.color="#fff";
    games.style.color="#fff";
    bio.textContent="Click Me!";
});
bio.addEventListener("mouseout", function() {
    gators.style.color="#0000EE";
    games.style.color="#0000EE";
    bio.textContent="Bio";
});

gators.addEventListener("mouseover", function() {
    bio.style.color="#fff";
    games.style.color="#fff";
    gators.textContent="Click Me!";
});
gators.addEventListener("mouseout", function() {
    bio.style.color="#0000EE";
    games.style.color="#0000EE";
    gators.textContent="Gators";
});

games.addEventListener("mouseover", function() {
    bio.style.color="#fff";
    gators.style.color="#fff";
    games.textContent="Click Me!";
});
games.addEventListener("mouseout", function() {
    bio.style.color="#0000EE";
    gators.style.color="#0000EE";
    games.textContent="Games!";
});