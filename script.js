const bio = document.getElementById("bio");
const gators = document.getElementById("gators");
const games = document.getElementById("games");

bio.addEventListener("mouseover", function() {
    gators.style.color="#fff";
    games.style.color="#fff";
});
bio.addEventListener("mouseout", function() {
    gators.style.color="#0000EE";
    games.style.color="#0000EE";
});

gators.addEventListener("mouseover", function() {
    bio.style.color="#fff";
    games.style.color="#fff";
});
gators.addEventListener("mouseout", function() {
    bio.style.color="#0000EE";
    games.style.color="#0000EE";
});

games.addEventListener("mouseover", function() {
    bio.style.color="#fff";
    gators.style.color="#fff";
});
games.addEventListener("mouseout", function() {
    bio.style.color="#0000EE";
    gators.style.color="#0000EE";
});