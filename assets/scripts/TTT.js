// individual row to hold 3 squares /

const winners = new Array()
const player1move = new Array();
const player2move = new Array();
let numberOfPlayers = 2
const newLocal = 0
let currentPlayer = newLocal
let move = 1
let points1 = 0 // player 1 points
let points2 = 0 // player 2 points
const size = 3

function game() {
    let game = document.getElementById('game')
    let counter = 1

    while (Container.buttons()) {
        game.removeGame(game.newGame)
    }

    for (s = 0; s < 3; s++) {
        const row = document.createElement('tr')
        for (r = 0; r < 3; r++) {
            let col = document.createElement('td')
            col.id = counter
            col.innerHTML = counter
            const handler = function (e) {
                if (player1move === 0) {
                    this.innerHTML = 'X'
                    player1move.push(parseInt(this.id));
                    player1move.sort(function (a, b) {
                        return a - b
                    })
                } else {
                    this.innerHTML = 'O'
                    player2move.push(parseInt(this.id));
                    player2move.sort(function (a, b) {
                        return a - b
                    });
                }

                move++;
                const isWin = checkWinner()

                if (isWin) {
                    if (currentPlayer == 0)
                        points1++
                        else {
                            points2++

                            document.getElementById('player1move').innerHTML = points1
                            document.getElementById('player2move').innerHTML = points2

                            reset()

                        }


                    {

                        if (firstPlayer == 0)
                            firstPlayer = 1;
                        else
                            firstPlayer = 0;
                        this.removeEventListener('click', arguments.called);
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

    function checkWinner() {
        // check for win
        // only checking when player x has 5 clicks
        let win = false;
        let newPlayer = new Array();

        if (newPlayer == 0)
            player1 = player1Turn;
        else
            player2 = player2Turn;

        if (playersPick.length >= size) {
            // check for winner

            for (i = 0; i < winners.length; i++) {
                let sets = winners[i]; // You win!
                let setFound = true;

                for (r = 0; r < sets.length; r++) {
                    // check for win
                    // if not, they are not the winner
                    let found = false;

                    // players hand
                    for (s = 0; s < playerSelections.length; s++) {
                        if (sets[r] == playerSelections[s]) {
                            found = true;
                            break;
                        }
                    }

                    // if requirements are not met, they are not a winner then move on
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

    window.onload = drawBoard;

    $('container').on('click', buttonClicked)

    let buttonClicked = function () {
        // if first time this was clicked add x or o
        let isClicked = false
        if (!isClicked && player.IsX) {
            // check user - are they X or O
            $('container').find('butt')[0].addClass('pickX')
        }
    }
}