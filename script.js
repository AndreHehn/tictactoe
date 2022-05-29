let fields = [];
let currentPlayer = 0;
let winner;
let crossWin = 0;
let circleWin = 0;
let position;
let winning = false;
let possibleWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

//player equal cross ....player odd circle
function stampSign(id) {
    if (currentPlayer % 2 == 0 && fields[id] == null) {
        crossMove(id);
    }
    else if (!currentPlayer % 2 == 0 && fields[id] == null) {
        circleMove(id);
    }
}


function crossMove(id) {
    fields[id] = 'cross';
    document.getElementById('cross' + id).classList.remove('d-none');
    checkWin();
    if (winning) {
        currentPlayer++;
        changePlayerToCircle();
    }
}


function circleMove(id) {
    fields[id] = 'circle';
    document.getElementById('circle' + id).classList.remove('d-none');
    checkWin();
    if (winning) {
        currentPlayer++;
        changePlayerToCross();
    }

}


function changePlayerToCross() {
    document.getElementById('player').classList.remove("circle-top");
    document.getElementById('player').classList.add("cross-top");
    document.getElementById('player').src = "./img/cross.png";
}


function changePlayerToCircle() {
    document.getElementById('player').classList.remove("cross-top");
    document.getElementById('player').classList.add("circle-top");
    document.getElementById('player').src = "./img/circle.png";
}


function checkWin() {
    for (let i = 0; i < possibleWin.length; i++) {
        if (fields[possibleWin[i][0]] == fields[possibleWin[i][1]] && fields[possibleWin[i][1]] == fields[possibleWin[i][2]]) {
            winner = fields[possibleWin[i][0]];
            winning = true;
            position = i;
            showWinner(winner);
        }
    }
    if (
        currentPlayer == 8 && winning) {
            winner = 'draw'; position = null;
        showWinner(winner);
    }
};


function showWinner(winner) {
    if (winner) {
        makeUnclickable();
        renderHtmlForShowWinner(winner);
        renderHtmlButtonsForShowWinner();
        if (winner == 'circle') { circleWin++; }
        if (winner == 'cross') { crossWin++; }
        renderWins();
        showLine();
    }
}


function renderHtmlButtonsForShowWinner() {
    document.getElementById('buttons').innerHTML = `
<div class="button" onclick="newGame(0)"><span>start new game with </span><img class="cross-button" src ="./img/cross.png"><span>first</span></div>
<div class="button" onclick="newGame(1)"><span>start new game with </span><img class="circle-button" src ="./img/circle.png"><span>first</span></div>
`;
}


function renderHtmlForShowWinner(winner) {
    document.getElementById('current-player').classList.add('d-none');
    document.getElementById('winning').classList.remove('d-none');
    if (winner == 'draw') {
        document.getElementById('winning').innerHTML = `<img class ="cross-top" src="./img/cross.png"><img class ="circle-top" src="./img/circle.png"><h1 class="h1-right">DRAW</h1>`;
    }
    else if (winner == 'circle') {
        document.getElementById('winning').innerHTML = `<img class ="circle-top" src="./img/circle.png"><h1 class="h1-right">WINS</h1>`;
    }
    else if (winner == 'cross') {
        document.getElementById('winning').innerHTML = `<img class ="cross-top" src="./img/cross.png"><h1 class="h1-right">WINS</h1>`;
    }
}


function makeUnclickable() {
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle' + i).parentNode.setAttribute('onclick', '');
    }
}


function renderWins() {
    document.getElementById('crosswin').innerHTML = `: ${crossWin} `;
    document.getElementById('circlewin').innerHTML = `: ${circleWin} `;
}


function newGame(n) {
    contentForNewGame(n);
    for (let i = 0; i < 9; i++) {
        contentForForLoopNewGame(i);
    }
    if (n == 0) {
        document.getElementById('player').src = "./img/cross.png";
    }
    else if (n == 1) {
        document.getElementById('player').src = "./img/circle.png";
    }
}


function contentForNewGame(n){
    fields = [];
    currentPlayer = n;
    document.getElementById('current-player').classList.remove('d-none');
    document.getElementById('winning').innerHTML ='';
    document.getElementById('winning').classList.remove('d-none');
}


function contentForForLoopNewGame(i) {
    if (i < 8) {
        document.getElementById('win' + i).classList.add('d-none');
    }
    document.getElementById('circle' + i).classList.add('d-none');
    document.getElementById('cross' + i).classList.add('d-none');
    document.getElementById('circle' + i).parentNode.setAttribute('onclick', `stampSign(${i})`);
}


function showLine() {
    if (winner !== 'draw') {
        if(position <3)
        {document.getElementById('win' + position).style.transform = 'scaleX(1.0)';}
        else if (position>2 && position<6)
        {document.getElementById('win' + position).style.transform = 'scaleY(1.0)';}
        else if (position ==6)
        {document.getElementById('win' + position).style.transform = 'rotate(45deg) scaleX(1.0)';}
        else if (position ==7)
        {document.getElementById('win' + position).style.transform = 'rotate(-45deg) scaleX(1.0)';}
    }
}
