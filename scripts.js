let currentPlayer = 1;

const currentPlayerHTML = document.getElementById("currentPlayer");
const playerTurnHTML = document.getElementById("playerTurn");
const rollSound = new Audio('assets/dice-rolling.wav');
const laughSound = new Audio('assets/laugh.wav');
const cheerSound = new Audio('assets/cheer.wav');

document.getElementById("rollDiceBtn").addEventListener("click", function () {
    rollSound.play();
    let diceResult = Math.floor(Math.random() * 6) + 1; // 1 és 6 közötti egész szám
    let message = "";
    switch (diceResult) {
        case 1:
            message = "😆 1-est dobtál! Mondj egy viccet, vagy igyál egy korty vizet! 💧";
            laughSound.play();
            break;
        case 2:
            message = "😅 2-est dobtál! Nem rossz, de lehetne jobb is... 🤷‍♂️";
            break;
        case 3:
            message = "😂 3-as! Képzeld el, hogy ez egy szerencseszám! 🍀";
            break;
        case 4:
            message = "🤣 4-es! Majdnem ötös, de nem egészen. 😜";
            break;
        case 5:
            message = "🤔 5-ös! Egy hajszál választott el a dupla dobástól!";
            break;
        case 6:
            message = "🔥 6-ost dobtál! Dobhatsz még egyszer! 🎉";
            cheerSound.play();
            setTimeout(() => {
                document.getElementById("rollDiceBtn").click(); // Automatikus újradobás
            }, 2000);
            break;
    }

    document.getElementById("diceResult").innerHTML = `🎲${diceResult} <br> ${message}`;

    // Ez a hatos újradobás miatt kell, ugyanis akkor nem szabad játékos váltani
    if (currentPlayer === 1 && diceResult < 6) {
        changePlayer(2);
    } else if (diceResult < 6) {
        changePlayer(1);
    }
});

function changePlayer(nextPlayer) {
    currentPlayerHTML.innerHTML = `Játékos ${currentPlayer} dobása`;
    playerTurnHTML.innerHTML = `Most játékos ${nextPlayer} jön`;
    currentPlayer = nextPlayer; // következő játékos
}