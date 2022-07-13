// variables

const bio = document.getElementById("bio");
const gators = document.getElementById("gators");
const games = document.getElementById("games");

const bioBlock = document.getElementById("bio-block");
const gatorsBlock = document.getElementById("gators-block");
const gamesBlock = document.getElementById("games-block");

const age = document.getElementById("age");

const gatorOne = document.getElementById("gator-1");
const gatorTwo = document.getElementById("gator-2");
const gatorThree = document.getElementById("gator-3");
const gatorFour = document.getElementById("gator-4");

const catchGator = document.getElementById("catch");
const quest = document.getElementById("quest");
const defaultRules = document.getElementById("default-rules");
const gamesNav = document.getElementById("games-nav");
const gamesLi = document.getElementById("games-li");
const catchRules = document.getElementById("catch-rules");
const catchBoard = document.getElementById("catch-board");
const questRules = document.getElementById("quest-rules");
const questBoard = document.getElementById("quest-board");

const questPiece = document.getElementById("quest-piece");

// navbar mouseover and mouseout

bio.addEventListener("mouseover", function() {
    gators.style.color="#fff";
    games.style.color="#fff";
    //bio.style.color="#0000EE";
    bio.textContent="BIO";
});
bio.addEventListener("mouseout", function() {
    gators.style.color="#000";
    games.style.color="#000";
    //bio.style.color="#000";
    bio.textContent="Bio";
});

gators.addEventListener("mouseover", function() {
    bio.style.color="#fff";
    games.style.color="#fff";
    //gators.style.color="#0000EE";
    gators.textContent="GATORS";
});
gators.addEventListener("mouseout", function() {
    bio.style.color="#000";
    games.style.color="#000";
    //gators.style.color="#000";
    gators.textContent="Gators";
});

games.addEventListener("mouseover", function() {
    bio.style.color="#fff";
    gators.style.color="#fff";
    //games.style.color="#0000EE";
    games.textContent="GAMES";
});
games.addEventListener("mouseout", function() {
    bio.style.color="#000";
    gators.style.color="#000";
    //games.style.color="#000";
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

    defaultRules.style.display="initial";
    gamesNav.style.width="50%";
    gamesLi.style.paddingTop="";
    gamesLi.style.fontSize="";
    catchRules.style.display="none";
    questRules.style.display="none";

    catchBoard.style.display="none";
    questBoard.style.display="none";
});

// nav mousedown & mouseup

bio.addEventListener("mousedown", function() {
    bio.style.color="red";
})
bio.addEventListener("mouseup", function() {
    bio.style.color="#000";
})

gators.addEventListener("mousedown", function() {
    gators.style.color="red";
})
gators.addEventListener("mouseup", function() {
    gators.style.color="#000";
})

games.addEventListener("mousedown", function() {
    games.style.color="red";
})
games.addEventListener("mouseup", function() {
    games.style.color="#000";
})

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

// game nav

catchGator.addEventListener("mousedown", function() {
    catchGator.style.color="red";
})
catchGator.addEventListener("mouseup", function() {
    catchGator.style.color="#d732e6";
})

quest.addEventListener("mousedown", function() {
    quest.style.color="red";
})
quest.addEventListener("mouseup", function() {
    quest.style.color="#d732e6";
})

catchGator.addEventListener("click", function() {
    defaultRules.style.display="none";
    gamesNav.style.width="40%";
    gamesLi.style.paddingTop="7px";
    gamesLi.style.fontSize="16px";
    catchRules.style.display="initial";
    questRules.style.display="none";
    questBoard.style.display="none"

    catchBoard.style.display="block";
    gatorOne.style.display="initial";
    gatorTwo.style.display="none";
    gatorThree.style.display="none";
    gatorFour.style.display="none";
})

quest.addEventListener("click", function() {
    defaultRules.style.display="none";
    gamesNav.style.width="40%";
    gamesLi.style.paddingTop="7px";
    gamesLi.style.fontSize="16px";
    questRules.style.display="initial";
    catchRules.style.display="none";
    catchBoard.style.display="none";

    questBoard.style.display="block";
})

// catch the gator game

gatorOne.addEventListener("mouseover", function() {
    if (gatorOne.style.display="initial") {
        gatorOne.style.display="none";
        gatorFour.style.display="initial";
    };
});

gatorFour.addEventListener("mouseover", function() {
    if (gatorFour.style.display="initial") {
        gatorFour.style.display="none";
        gatorTwo.style.display="initial";
    };
});

gatorTwo.addEventListener("mouseover", function() {
    if (gatorTwo.style.display="initial") {
        gatorTwo.style.display="none";
        gatorThree.style.display="initial";
    };
});

gatorThree.addEventListener("click", function() {
    alert("Wow... You won? I can't believe you won. Honestly, congratulations. I'm happy for you. You caught the alligator.");
})

// gator quest game

function moveGatorLeft () {
    const leftNumbers = questPiece.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        questPiece.style.left = `${left - 5}px`;
    }
};

function moveGatorRight () {
    const leftNumbers = questPiece.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 400) {
        questPiece.style.left = `${left + 5}px`;
    }
};

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveGatorLeft();
    }
    if (e.key === "ArrowRight") {
        moveGatorRight();
    }
    if (e.key === "ArrowUp") {
        moveGatorUp();
    }
    if (e.key === "ArrowDown") {
        moveGatorDown();
    }
});