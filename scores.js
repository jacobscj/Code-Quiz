// pulling saved data from local storage to show high scores
function printHighScores() {
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    highScores.forEach(function(score) {
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;

        var olEl = document.getElementById("highScores");
        olEl.appendChild(liTag);
    });
}

// when clear button clicked, remove high scores list
function clearHighscores() {
    window.localStorage.removeItem("highScores");
    window.location.reload();
}

printHighScores();   

document.getElementById("clearBtn").addEventListener("click", clearHighscores) 

