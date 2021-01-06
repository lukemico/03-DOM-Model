/*
 * A complete tic-tac-toe widget.  Just include this script in a
 * browser page and enjoy.  A tic-tac-toe game will be included
 * as a child element of the element with id "tictactoe".  If the
 * page has no such element, it will just be added at the end of
 * the body.
 */
(function () {

    var squares = [],
        EMPTY = "\xA0",
        score,
        moves,
        turn = "X",
        oldOnload,

    /*
     * To determine a win condition, each square is "tagged" from left
     * to right, top to bottom, with successive powers of 2.  Each cell
     * thus represents an individual bit in a 9-bit string, and a
     * player's squares at any given time can be represented as a
     * unique 9-bit value. A winner can thus be easily determined by
     * checking whether the player's current 9 bits have covered any
     * of the eight "three-in-a-row" combinations.
     *
     *     273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     *
     */
    wins = [7, 56, 448, 73, 146, 292, 273, 84],

    /*
     * Clears the score and move count, erases the board, and makes it
     * X's turn.
     */
    startNewGame = function () {
        var i;

        turn = "X";
        score = {"X": 0, "O": 0};
        moves = 0;
        for (i = 0; i < squares.length; i += 1) {
            squares[i].firstChild.nodeValue = EMPTY;
        }
    },

    /*
     * Returns whether the given score is a winning score.
     */
    win = function (score) {
        var i;
        for (i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    },

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cats game.  Also changes the
     * current player.
     */
    set = function () {
        if (this.firstChild.nodeValue !== EMPTY) {
            return;
        }
        this.firstChild.nodeValue = turn;
        moves += 1;
        score[turn] += this.indicator;
        if (win(score[turn])) {
            alert(turn + " wins!");
            startNewGame();
        } else if (moves === 9) {
            alert("Cat\u2019s game!");
            startNewGame();
        } else {
            turn = turn === "X" ? "O" : "X";
        }
    },

    /*
     * Creates and attaches the DOM elements for the board as an
     * HTML table, assigns the indicators for each cell, and starts
     * a new game.
     */
    play = function () {
        var board = document.createElement("table"),
            indicator = 1,
            i, j,
            row, cell,
            parent;
        board.border = 1;
        for (i = 0; i < 3; i += 1) {
            row = document.createElement("tr");
            board.appendChild(row);
            for (j = 0; j < 3; j += 1) {
                cell = document.createElement("td");
                cell.width = cell.height = 50;
                cell.align = cell.valign = 'center';
                cell.indicator = indicator;
                cell.onclick = set;
                cell.appendChild(document.createTextNode(""));
                row.appendChild(cell);
                squares.push(cell);
                indicator += indicator;
            }
        }

        // Attach under tictactoe if present, otherwise to body.
        parent = document.getElementById("tictactoe") || document.body;
        parent.appendChild(board);
        startNewGame();
    };

    /*
     * Add the play function to the (virtual) list of onload events.
     */
    if (typeof window.onload === "function") {
        oldOnLoad = window.onload;
        window.onload = function () {
            oldOnLoad();
            play();
        };
    } else {
        window.onload = play;
    }
}());








// (function() {
//     var ui = {
//             board: document.querySelector('.board'),
//             squares: document.querySelectorAll('.square'),
//             restart: document.querySelector('.restart'),
//             mute: document.querySelector('.mute'),
//             scores: {
//                 scores: document.querySelector('.scores'),
//                 swap: document.querySelector('.swap'),
//                 player1: document.querySelector('.player1 .score'),
//                 player2: document.querySelector('.player2 .score'),
//                 ties: document.querySelector('.ties .score'),
//                 turn1: document.querySelector('.player1'),
//                 turn2: document.querySelector('.player2'),
//                 turnTies: document.querySelector('.ties')
//             }
//         },
//         computerScores = {
//             player1: 0,
//             player2: 0,
//             ties: 0
//         },
//         twoPlayerScores = {
//             player1: 0,
//             player2: 0,
//             ties: 0
//         },
//         player1 = 'x',
//         player2 = 'o',
//         audio = {},
//         context, totalSquares = 9,
//         hasLocalStorage, muted, playing, turn = true,
//         firstTurn = true,
//         twoPlayer = false,
//         delay = 300,
//         playerChance = 0.75,
//         board, win = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6]
//         ];
//
//     function toggleTwoPlayer() {
//         twoPlayer = !twoPlayer;
//         var t = ui.scores.scores.classList;
//         if (twoPlayer) {
//             t.remove('p1');
//             t.add('p2');
//             firstTurn = true;
//         } else {
//             t.remove('p2');
//             t.add('p1');
//             firstTurn = false;
//         }
//         ga('send', 'event', 'Mode', twoPlayer ? 'players' : 'computer');
//         ui.scores.player1.innerHTML = (twoPlayer ? twoPlayerScores.player1 : computerScores.player1);
//         ui.scores.player2.innerHTML = (twoPlayer ? twoPlayerScores.player2 : computerScores.player2);
//         ui.scores.ties.innerHTML = (twoPlayer ? twoPlayerScores.ties : computerScores.ties);
//         playing = false;
//         start();
//     }
//
//     function updateBoard(player, index) {
//         ui.squares[index].querySelector('div').classList.add(player);
//     }
//
//     function updateTurn() {
//         var t1 = ui.scores.turn1.classList,
//             t2 = ui.scores.turn2.classList,
//             ties = ui.scores.turnTies.classList;
//         if (twoPlayer && ui.restart.style.display === 'none') {
//             if (turn) {
//                 t2.remove('turn');
//                 t1.add('turn');
//             } else {
//                 t1.remove('turn');
//                 t2.add('turn');
//             }
//             ties.add('turn');
//         } else {
//             t1.remove('turn');
//             t2.remove('turn');
//             ties.remove('turn');
//         }
//     }
//
//     function selectSquare(index) {
//         if (board[index] !== 0 || isGameOver() || (!twoPlayer && turn)) {
//             return;
//         }
//         if (twoPlayer) {
//             turn = !turn;
//             board[index] = turn ? -1 : 1;
//             updateBoard(turn ? player1 : player2, index);
//             playAudio('note-' + (turn ? 'low' : 'high'));
//             isGameOver();
//         } else {
//             board[index] = -1;
//             updateBoard(player1, index);
//             turn = true;
//             playAudio('note-low');
//             setTimeout(computerPlay, delay);
//         }
//         updateTurn();
//     }
//
//     function initSquare(index) {
//         ui.squares[index].onmousedown = function(event) {
//             event.preventDefault();
//             selectSquare(index);
//         };
//         ui.squares[index].ontouchstart = function(event) {
//             event.preventDefault();
//             updateBoard(player1, index);
//         };
//         ui.squares[index].ontouchend = function(event) {
//             event.preventDefault();
//             if (audio['note-low']) {
//                 for (var i = totalSquares; i--;) {
//                     var sq = ui.squares[i];
//                     sq.ontouchstart = sq.onmousedown;
//                     sq.ontouchend = undefined;
//                 }
//             }
//             selectSquare(index);
//         };
//     }
//
//     function start() {
//         if (playing) {
//             return;
//         }
//         playing = true;
//         ui.restart.style.display = 'none';
//         board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//         for (var i = totalSquares; i--;) {
//             ui.squares[i].querySelector('div').className = '';
//         }
//         ui.scores.ties.classList.remove('appear');
//         ui.scores.player1.classList.remove('appear');
//         ui.scores.player2.classList.remove('appear');
//         ui.board.classList.remove('blink');
//         turn = firstTurn = !firstTurn;
//         updateTurn();
//         if (firstTurn && !twoPlayer) {
//             setTimeout(computerPlay, delay);
//         }
//     }
//
//     function init() {
//         try {
//             hasLocalStorage = 'localStorage' in window && window['localStorage'] !== null;
//         } catch (e) {
//             hasLocalStorage = false;
//         }
//         window.AudioContext = window.AudioContext || window.webkitAudioContext;
//         if (window.AudioContext) {
//             context = new AudioContext();
//             loadAudio('note-high');
//             loadAudio('note-low');
//             loadAudio('game-over');
//             loadAudio('game-over-tie');
//             if (hasLocalStorage) {
//                 try {
//                     muted = localStorage.getItem('muted') === 'true';
//                 } catch (e) {
//                     muted = false;
//                 }
//             }
//             updateMuteIcon();
//             ui.mute.ontouchstart = ui.mute.onclick = function(event) {
//                 event.preventDefault();
//                 toggleMute();
//             };
//         } else {
//             ui.mute.style.display = 'none';
//         }
//         for (var i = totalSquares; i--;) {
//             initSquare(i);
//         }
//         ui.restart.ontouchstart = ui.scores.scores.ontouchstart = function(event) {
//             event.preventDefault();
//         };
//         ui.scores.scores.ontouchend = ui.scores.scores.onclick = function(event) {
//             event.preventDefault();
//             toggleTwoPlayer();
//         };
//         ui.restart.ontouchend = ui.restart.onclick = function(event) {
//             event.preventDefault();
//             start();
//         };
//     }
//
//     function endGame(winner, sq) {
//         ui.restart.style.display = 'block';
//         setTimeout(function() {
//             var action = 'Game',
//                 label = (twoPlayer ? 'players ' : 'computer ');
//             setTimeout(function() {
//                 playing = false;
//             }, delay);
//             if (sq) {
//                 for (var i = 3; i--;) {
//                     ui.squares[sq[i]].querySelector('div').classList.add('blink');
//                 }
//             }
//             switch (winner) {
//                 case player1:
//                     ui.scores.player1.innerHTML = (twoPlayer ? ++twoPlayerScores.player1 : ++computerScores.player1);
//                     ui.scores.player1.classList.add('appear');
//                     playAudio('game-over');
//                     ga('send', 'event', action, label + (twoPlayer ? player1 : 'lose'));
//                     break;
//                 case player2:
//                     ui.scores.player2.innerHTML = (twoPlayer ? ++twoPlayerScores.player2 : ++computerScores.player2);
//                     ui.scores.player2.classList.add('appear');
//                     playAudio('game-over');
//                     ga('send', 'event', action, label + (twoPlayer ? player2 : 'win'));
//                     break;
//                 default:
//                     ui.scores.ties.innerHTML = (twoPlayer ? ++twoPlayerScores.ties : ++computerScores.ties);
//                     ui.scores.ties.classList.add('appear');
//                     ui.board.classList.add('blink');
//                     playAudio('game-over-tie');
//                     ga('send', 'event', action, label + 'tie');
//                     break;
//             }
//         }, (turn && !twoPlayer) ? 100 : delay + 100);
//     }
//
//     function isGameOver() {
//         for (var i = win.length; i--;) {
//             var sq = win[i],
//                 line = board[sq[0]] + board[sq[1]] + board[sq[2]];
//             if (line === 3 || line === -3) {
//                 endGame(line === 3 ? player2 : player1, sq);
//                 return true;
//             }
//         }
//         var count = 0;
//         for (i = totalSquares; i--;) {
//             if (board[i] !== 0) {
//                 count++;
//             }
//         }
//         if (count === 9) {
//             endGame();
//             return true;
//         }
//         return false;
//     }
//
//     function computerPlay() {
//         if (isGameOver()) {
//             return;
//         }
//         var i, j, k, max, chosen, firstSquare, count = 0;
//         turn = false;
//         updateTurn();
//         playAudio('note-high');
//         for (i = totalSquares; i--;) {
//             if (board[i] !== 0) {
//                 count++;
//                 if (count === 1) {
//                     firstSquare = i;
//                 }
//             }
//         }
//         if (count < 2 && Math.random() > 0.2) {
//             do {
//                 chosen = Math.floor(Math.random() * totalSquares);
//             } while (chosen === firstSquare);
//         } else {
//             for (i = totalSquares; i--;) {
//                 for (j = totalSquares; j--;) {
//                     if (board[j] !== 0) {
//                         continue;
//                     }
//                     board[j] = 1;
//                     if (isGameOver()) {
//                         updateBoard(player2, j);
//                         return;
//                     }
//                     board[j] = 0;
//                 }
//                 if (board[i] !== 0) {
//                     continue;
//                 }
//                 board[i] = 1;
//                 var min = null,
//                     temp = board.concat();
//                 for (j = totalSquares; j--;) {
//                     if (temp[j] !== 0) {
//                         continue;
//                     }
//                     temp[j] = -1;
//                     for (k = win.length; k--;) {
//                         if (temp[win[k][0]] + temp[win[k][1]] + temp[win[k][2]] === -3 && Math.random() > playerChance) {
//                             board[i] = 0;
//                             board[j] = 1;
//                             updateBoard(player2, j);
//                             isGameOver();
//                             return;
//                         }
//                     }
//                     var max2 = 0,
//                         min2 = 0,
//                         tempMax = temp.concat(),
//                         tempMin = temp.concat();
//                     for (k = totalSquares; k--;) {
//                         if (tempMax[k] === 0) {
//                             tempMax[k] = 1;
//                         }
//                         if (tempMin[k] === 0) {
//                             tempMin[k] = -1;
//                         }
//                     }
//                     for (k = win.length; k--;) {
//                         if (tempMax[win[k][0]] + tempMax[win[k][1]] + tempMax[win[k][2]] === 3) {
//                             max2++;
//                         }
//                         if (tempMin[win[k][0]] + tempMin[win[k][1]] + tempMin[win[k][2]] === -3) {
//                             min2++;
//                         }
//                     }
//                     var d = max2 - min2;
//                     min = min == null ? d : (min > d ? d : min);
//                     temp[j] = 0;
//                 }
//                 if (max == null || max < min) {
//                     max = min;
//                     chosen = i;
//                 }
//                 board[i] = 0;
//             }
//         }
//         board[chosen] = 1;
//         updateBoard(player2, chosen);
//         isGameOver();
//     }
//     init();
//     start();
// }());
//
//
//
//
//
//
//
//
//
//
// // if (window.location !== window.top.location || window.location.href && !window.location.href.match(/https:\/\/playtictactoe\.org|neave\.local/)) {
// //     top.location.href = 'https://playtictactoe.org/';
// // }
// // (function(i, s, o, g, r, a, m) {
// //     i['GoogleAnalyticsObject'] = r;
// //     i[r] = i[r] || function() {
// //         (i[r].q = i[r].q || []).push(arguments)
// //     }, i[r].l = 1 * new Date();
// //     a = s.createElement(o), m = s.getElementsByTagName(o)[0];
// //     a.async = 1;
// //     a.src = g;
// //     m.parentNode.insertBefore(a, m)
// // })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
// // ga('create', 'UA-56095-18', 'auto');
// // ga('send', 'pageview');
// // window.onerror = function(message, file, line) {
// //     if (message) {
// //         ga('send', 'event', 'Error', message, file && line ? ('[' + file + ':' + line + ']') : '', true);
// //     }
// //     return false;
// // };
// // (function() {
// //     var ui = {
// //             board: document.querySelector('.board'),
// //             squares: document.querySelectorAll('.square'),
// //             restart: document.querySelector('.restart'),
// //             mute: document.querySelector('.mute'),
// //             scores: {
// //                 scores: document.querySelector('.scores'),
// //                 swap: document.querySelector('.swap'),
// //                 player1: document.querySelector('.player1 .score'),
// //                 player2: document.querySelector('.player2 .score'),
// //                 ties: document.querySelector('.ties .score'),
// //                 turn1: document.querySelector('.player1'),
// //                 turn2: document.querySelector('.player2'),
// //                 turnTies: document.querySelector('.ties')
// //             }
// //         },
// //         computerScores = {
// //             player1: 0,
// //             player2: 0,
// //             ties: 0
// //         },
// //         twoPlayerScores = {
// //             player1: 0,
// //             player2: 0,
// //             ties: 0
// //         },
// //         player1 = 'x',
// //         player2 = 'o',
// //         audio = {},
// //         context, totalSquares = 9,
// //         hasLocalStorage, muted, playing, turn = true,
// //         firstTurn = true,
// //         twoPlayer = false,
// //         delay = 300,
// //         playerChance = 0.75,
// //         board, win = [
// //             [0, 1, 2],
// //             [3, 4, 5],
// //             [6, 7, 8],
// //             [0, 3, 6],
// //             [1, 4, 7],
// //             [2, 5, 8],
// //             [0, 4, 8],
// //             [2, 4, 6]
// //         ];
// //
// //     function loadAudio(name) {
// //         var xhr = new XMLHttpRequest();
// //         xhr.open('GET', '/assets/audio/' + name + '.wav', true);
// //         xhr.responseType = 'arraybuffer';
// //         xhr.onload = function() {
// //             context.decodeAudioData(xhr.response, function(buffer) {
// //                 audio[name] = buffer;
// //             }, function() {});
// //         };
// //         xhr.send();
// //     }
// //
// //     function playAudio(name) {
// //         if (muted || !audio[name]) {
// //             return;
// //         }
// //         var source = context.createBufferSource();
// //         source.buffer = audio[name];
// //         source.connect(context.destination);
// //         if (source.start) {
// //             source.start(0);
// //         } else {
// //             source.noteOn(0);
// //         }
// //     }
// //
// //     function updateMuteIcon() {
// //         var muteSoundWaves = ui.mute.querySelectorAll('path');
// //         for (var i = muteSoundWaves.length; i--;) {
// //             muteSoundWaves[i].style.display = muted ? 'none' : '';
// //         }
// //     }
// //
// //     function toggleMute() {
// //         muted = !muted;
// //         if (hasLocalStorage) {
// //             try {
// //                 localStorage.setItem('muted', muted.toString());
// //             } catch (e) {}
// //         }
// //         updateMuteIcon();
// //         ga('send', 'event', 'Mute', muted ? 'muted' : 'unmuted');
// //     }
// //
// //     function toggleTwoPlayer() {
// //         twoPlayer = !twoPlayer;
// //         var t = ui.scores.scores.classList;
// //         if (twoPlayer) {
// //             t.remove('p1');
// //             t.add('p2');
// //             firstTurn = true;
// //         } else {
// //             t.remove('p2');
// //             t.add('p1');
// //             firstTurn = false;
// //         }
// //         ga('send', 'event', 'Mode', twoPlayer ? 'players' : 'computer');
// //         ui.scores.player1.innerHTML = (twoPlayer ? twoPlayerScores.player1 : computerScores.player1);
// //         ui.scores.player2.innerHTML = (twoPlayer ? twoPlayerScores.player2 : computerScores.player2);
// //         ui.scores.ties.innerHTML = (twoPlayer ? twoPlayerScores.ties : computerScores.ties);
// //         playing = false;
// //         start();
// //     }
// //
// //     function updateBoard(player, index) {
// //         ui.squares[index].querySelector('div').classList.add(player);
// //     }
// //
// //     function updateTurn() {
// //         var t1 = ui.scores.turn1.classList,
// //             t2 = ui.scores.turn2.classList,
// //             ties = ui.scores.turnTies.classList;
// //         if (twoPlayer && ui.restart.style.display === 'none') {
// //             if (turn) {
// //                 t2.remove('turn');
// //                 t1.add('turn');
// //             } else {
// //                 t1.remove('turn');
// //                 t2.add('turn');
// //             }
// //             ties.add('turn');
// //         } else {
// //             t1.remove('turn');
// //             t2.remove('turn');
// //             ties.remove('turn');
// //         }
// //     }
// //
// //     function selectSquare(index) {
// //         if (board[index] !== 0 || isGameOver() || (!twoPlayer && turn)) {
// //             return;
// //         }
// //         if (twoPlayer) {
// //             turn = !turn;
// //             board[index] = turn ? -1 : 1;
// //             updateBoard(turn ? player1 : player2, index);
// //             playAudio('note-' + (turn ? 'low' : 'high'));
// //             isGameOver();
// //         } else {
// //             board[index] = -1;
// //             updateBoard(player1, index);
// //             turn = true;
// //             playAudio('note-low');
// //             setTimeout(computerPlay, delay);
// //         }
// //         updateTurn();
// //     }
// //
// //     function initSquare(index) {
// //         ui.squares[index].onmousedown = function(event) {
// //             event.preventDefault();
// //             selectSquare(index);
// //         };
// //         ui.squares[index].ontouchstart = function(event) {
// //             event.preventDefault();
// //             updateBoard(player1, index);
// //         };
// //         ui.squares[index].ontouchend = function(event) {
// //             event.preventDefault();
// //             if (audio['note-low']) {
// //                 for (var i = totalSquares; i--;) {
// //                     var sq = ui.squares[i];
// //                     sq.ontouchstart = sq.onmousedown;
// //                     sq.ontouchend = undefined;
// //                 }
// //             }
// //             selectSquare(index);
// //         };
// //     }
// //
// //     function start() {
// //         if (playing) {
// //             return;
// //         }
// //         playing = true;
// //         ui.restart.style.display = 'none';
// //         board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// //         for (var i = totalSquares; i--;) {
// //             ui.squares[i].querySelector('div').className = '';
// //         }
// //         ui.scores.ties.classList.remove('appear');
// //         ui.scores.player1.classList.remove('appear');
// //         ui.scores.player2.classList.remove('appear');
// //         ui.board.classList.remove('blink');
// //         turn = firstTurn = !firstTurn;
// //         updateTurn();
// //         if (firstTurn && !twoPlayer) {
// //             setTimeout(computerPlay, delay);
// //         }
// //     }
// //
// //     function init() {
// //         try {
// //             hasLocalStorage = 'localStorage' in window && window['localStorage'] !== null;
// //         } catch (e) {
// //             hasLocalStorage = false;
// //         }
// //         window.AudioContext = window.AudioContext || window.webkitAudioContext;
// //         if (window.AudioContext) {
// //             context = new AudioContext();
// //             loadAudio('note-high');
// //             loadAudio('note-low');
// //             loadAudio('game-over');
// //             loadAudio('game-over-tie');
// //             if (hasLocalStorage) {
// //                 try {
// //                     muted = localStorage.getItem('muted') === 'true';
// //                 } catch (e) {
// //                     muted = false;
// //                 }
// //             }
// //             updateMuteIcon();
// //             ui.mute.ontouchstart = ui.mute.onclick = function(event) {
// //                 event.preventDefault();
// //                 toggleMute();
// //             };
// //         } else {
// //             ui.mute.style.display = 'none';
// //         }
// //         for (var i = totalSquares; i--;) {
// //             initSquare(i);
// //         }
// //         ui.restart.ontouchstart = ui.scores.scores.ontouchstart = function(event) {
// //             event.preventDefault();
// //         };
// //         ui.scores.scores.ontouchend = ui.scores.scores.onclick = function(event) {
// //             event.preventDefault();
// //             toggleTwoPlayer();
// //         };
// //         ui.restart.ontouchend = ui.restart.onclick = function(event) {
// //             event.preventDefault();
// //             start();
// //         };
// //     }
// //
// //     function endGame(winner, sq) {
// //         ui.restart.style.display = 'block';
// //         setTimeout(function() {
// //             var action = 'Game',
// //                 label = (twoPlayer ? 'players ' : 'computer ');
// //             setTimeout(function() {
// //                 playing = false;
// //             }, delay);
// //             if (sq) {
// //                 for (var i = 3; i--;) {
// //                     ui.squares[sq[i]].querySelector('div').classList.add('blink');
// //                 }
// //             }
// //             switch (winner) {
// //                 case player1:
// //                     ui.scores.player1.innerHTML = (twoPlayer ? ++twoPlayerScores.player1 : ++computerScores.player1);
// //                     ui.scores.player1.classList.add('appear');
// //                     playAudio('game-over');
// //                     ga('send', 'event', action, label + (twoPlayer ? player1 : 'lose'));
// //                     break;
// //                 case player2:
// //                     ui.scores.player2.innerHTML = (twoPlayer ? ++twoPlayerScores.player2 : ++computerScores.player2);
// //                     ui.scores.player2.classList.add('appear');
// //                     playAudio('game-over');
// //                     ga('send', 'event', action, label + (twoPlayer ? player2 : 'win'));
// //                     break;
// //                 default:
// //                     ui.scores.ties.innerHTML = (twoPlayer ? ++twoPlayerScores.ties : ++computerScores.ties);
// //                     ui.scores.ties.classList.add('appear');
// //                     ui.board.classList.add('blink');
// //                     playAudio('game-over-tie');
// //                     ga('send', 'event', action, label + 'tie');
// //                     break;
// //             }
// //         }, (turn && !twoPlayer) ? 100 : delay + 100);
// //     }
// //
// //     function isGameOver() {
// //         for (var i = win.length; i--;) {
// //             var sq = win[i],
// //                 line = board[sq[0]] + board[sq[1]] + board[sq[2]];
// //             if (line === 3 || line === -3) {
// //                 endGame(line === 3 ? player2 : player1, sq);
// //                 return true;
// //             }
// //         }
// //         var count = 0;
// //         for (i = totalSquares; i--;) {
// //             if (board[i] !== 0) {
// //                 count++;
// //             }
// //         }
// //         if (count === 9) {
// //             endGame();
// //             return true;
// //         }
// //         return false;
// //     }
// //
// //     function computerPlay() {
// //         if (isGameOver()) {
// //             return;
// //         }
// //         var i, j, k, max, chosen, firstSquare, count = 0;
// //         turn = false;
// //         updateTurn();
// //         playAudio('note-high');
// //         for (i = totalSquares; i--;) {
// //             if (board[i] !== 0) {
// //                 count++;
// //                 if (count === 1) {
// //                     firstSquare = i;
// //                 }
// //             }
// //         }
// //         if (count < 2 && Math.random() > 0.2) {
// //             do {
// //                 chosen = Math.floor(Math.random() * totalSquares);
// //             } while (chosen === firstSquare);
// //         } else {
// //             for (i = totalSquares; i--;) {
// //                 for (j = totalSquares; j--;) {
// //                     if (board[j] !== 0) {
// //                         continue;
// //                     }
// //                     board[j] = 1;
// //                     if (isGameOver()) {
// //                         updateBoard(player2, j);
// //                         return;
// //                     }
// //                     board[j] = 0;
// //                 }
// //                 if (board[i] !== 0) {
// //                     continue;
// //                 }
// //                 board[i] = 1;
// //                 var min = null,
// //                     temp = board.concat();
// //                 for (j = totalSquares; j--;) {
// //                     if (temp[j] !== 0) {
// //                         continue;
// //                     }
// //                     temp[j] = -1;
// //                     for (k = win.length; k--;) {
// //                         if (temp[win[k][0]] + temp[win[k][1]] + temp[win[k][2]] === -3 && Math.random() > playerChance) {
// //                             board[i] = 0;
// //                             board[j] = 1;
// //                             updateBoard(player2, j);
// //                             isGameOver();
// //                             return;
// //                         }
// //                     }
// //                     var max2 = 0,
// //                         min2 = 0,
// //                         tempMax = temp.concat(),
// //                         tempMin = temp.concat();
// //                     for (k = totalSquares; k--;) {
// //                         if (tempMax[k] === 0) {
// //                             tempMax[k] = 1;
// //                         }
// //                         if (tempMin[k] === 0) {
// //                             tempMin[k] = -1;
// //                         }
// //                     }
// //                     for (k = win.length; k--;) {
// //                         if (tempMax[win[k][0]] + tempMax[win[k][1]] + tempMax[win[k][2]] === 3) {
// //                             max2++;
// //                         }
// //                         if (tempMin[win[k][0]] + tempMin[win[k][1]] + tempMin[win[k][2]] === -3) {
// //                             min2++;
// //                         }
// //                     }
// //                     var d = max2 - min2;
// //                     min = min == null ? d : (min > d ? d : min);
// //                     temp[j] = 0;
// //                 }
// //                 if (max == null || max < min) {
// //                     max = min;
// //                     chosen = i;
// //                 }
// //                 board[i] = 0;
// //             }
// //         }
// //         board[chosen] = 1;
// //         updateBoard(player2, chosen);
// //         isGameOver();
// //     }
// //     init();
// //     start();
// // }());
//
//