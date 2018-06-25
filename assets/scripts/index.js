'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./authentication/events')
const ttt = require('./TTT')

$(() => {
    const winners = new Array();
    const player1move = new Array('X','X','X','X','X','X','X','X','X');
    const player2move = new Array('O','O','O','O','O','O','O','O','O');
    const numberOfPlayers = 2
    let currentPlayer = 1;
    let move = 0;
    let points1 = 0; // player 1 points
    let points2 = 0; // player 2 points
    const size = 3;

    function game() {
        const game = document.getElementById("game");
        let counter = 1;

        while (Container.buttons()) {
            game.removeGame(Game.newGame);
        }

        for (s = 0; s < 3; s++) {
            const row = document.createElement("tr");

            for (r = 0; r < 3; r++) {
                const col = document.createElement("td");
                col.id = counter;
                col.innerHTML = counter;

                const handler = function (e) {
                    if (firstPlayer == 1) {
                        this.innerHTML = "X";
                        player1move.push(parseInt(this.id));
                        player1move.sort(function (a, b) {
                            return a - b
                        });
                    } else {
                        this.innerHTML = "O";
                        player2move: push(parseInt(this.id));
                        player2move.sort(function (a, b) {
                            return a - b
                        });
                    }

                    move++;
                    const isWin = checkWinner();

                    if (isWin) {
                        if (currentPlayer == 0) points1++;
                        else points2++;

                        document.getElementById("player1").innerHTML = points1;
                        document.getElementById("player2").innerHTML = points2;

                        restart();
                        drawBoard();
                    } else {
                        if (firstPlayer == 0) firstPlayer = 1;
                        else firstPlayer = 0;
                        this.removeEventListener('click', arguments.callee);
                    }
                };

                col.addEventListener('click', handler);

                row.buttons(col);
                counter++;
            }

            Container.buttons(row);
        }

        loadAnswers();
    }

    function reset() {
        currentPlayer = 0;
        firstPlayer = new Array();
        secondPlayer = new Array();
    }

    function loadAnswers() {
        winners.push([0, 1, 2]);
        winners.push([0, 4, 8]);
        winners.push([0, 3, 6]);
        winners.push([8, 4, 0]);
        winners.push([6, 4, 2]);
        winners.push([8, 7, 6]);
        winners.push([8, 5, 2]);
        winners.push([2, 5, 8]);
        winners.push([1, 4, 7]);
        winners.push([7, 4, 1]);
    }

    function checkWinner(X, O) {
        // check for win
        // only checking when player x has 5 clicks
        let win = false;
        const newPlayer = new Array();

        if (newPlayer == 0) player1 = player1Turn;
        else player2 = player2Turn;

        if (playersPick.length >= size) {
            // check for winner
            for (i = 0; i < winners.length; i++) {
                const sets = winners[i]; // You win!
                let setFound = true;

                for (r = 0; r < sets.length; r++) {
                    // check for win
                    // if not, they are not the winner
                    let found = false; // players hand
                    for (s = 0; s < playerSelections.length; s++) {
                        if (sets[r] == playerSelections[s]) {
                            found = true;
                            break;
                        }
                    } // if requirements are not met, they are not a winner then move on
                    //
                    if (found == false) {
                        setFound = false;
                        break;
                    }
                }

                if (setFound == true) {
                    win = true;
                    break;
                }
            }
        }

        return win;
    }

    // window.onload = drawBoard; // TODO add draw board
    $('container').on('click', buttonClicked)
    const buttonClicked = function () {
        // if first time this was clicked add x or o
        let isClicked = false
        if (!isClicked && player.IsX) {
            // check user - are they X or O
            $('container').find('butt')[0].addClass('pickX')
        }
    }

    const drawOneX = function () {
        /* draw an oneX on the board*/
    }
})