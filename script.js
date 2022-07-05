const bio = document.getElementById("bio");
const gators = document.getElementById("gators");
const games = document.getElementById("games");

bio.addEventListener("mouseover", function() {
    gators.style.color="#fff";
    games.style.color="#fff";
    bio.style.color="#ff0000";
    bio.textContent="CLICK";
});
bio.addEventListener("mouseout", function() {
    gators.style.color="#000";
    games.style.color="#000";
    bio.style.color="#000";
    bio.textContent="Bio";
});

gators.addEventListener("mouseover", function() {
    bio.style.color="#fff";
    games.style.color="#fff";
    gators.style.color="#ff0000";
    gators.textContent="CLICK";
});
gators.addEventListener("mouseout", function() {
    bio.style.color="#000";
    games.style.color="#000";
    gators.style.color="#000"
    gators.textContent="Gators";
});

games.addEventListener("mouseover", function() {
    bio.style.color="#fff";
    gators.style.color="#fff";
    games.style.color="#ff0000";
    games.textContent="CLICK";
});
games.addEventListener("mouseout", function() {
    bio.style.color="#000";
    gators.style.color="#000";
    games.style.color="#000";
    games.textContent="Games";
});