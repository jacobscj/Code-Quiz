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

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick -= clearHighscores;

printHighScores();
