let fields = [];
let currentPlayer = 0;
let winner;
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
        circleMove(id)
    }
}


function crossMove(id) {
    fields[id] = 'cross';
    document.getElementById('cross' + id).classList.remove('d-none');
    checkWin();
    if (!winner) {
        currentPlayer++;
        changePlayerToCircle();
    }
}


function circleMove(id) {
    fields[id] = 'circle';
    document.getElementById('circle' + id).classList.remove('d-none');
    checkWin();
    if (!winner) {
        currentPlayer++;
        changePlayerToCross();
    }

}


function changePlayerToCross() {
    document.getElementById('player').classList.remove("circle");
    document.getElementById('player').classList.add("cross");
    document.getElementById('player').src = "./img/cross.png";
}


function changePlayerToCircle() {
    document.getElementById('player').classList.remove("cross");
    document.getElementById('player').classList.add("circle");
    document.getElementById('player').src = "./img/circle.png";
}


function checkWin() {

    let winning = false;
    for (let i = 0; i < possibleWin.length; i++) {
        const element = possibleWin[i];
        if (fields[element[0]] == fields[element[1]] && fields[element[1]] == fields[element[2]]) { winner = fields[element[0]]; winning = true; }
    }
    if (currentPlayer == 8 && !winning) { winner = 'draw'; }
    showWinner(winner);
    return winner;
};


function showWinner(winner) {
    if (winner) {
        makeUnclickable();
        console.log(winner);
        renderHtmlForShowWinner(winner);
        renderHtmlButtonsForShowWinner();
    }
}

function renderHtmlButtonsForShowWinner(){
document.getElementById('buttons').innerHTML=``;
//needs to be filled
}

function renderHtmlForShowWinner(winner){
    if (winner == 'draw') {
        document.getElementById('header').innerHTML = `<img class ="cross" src="./img/cross.png"><img class ="circle" src="./img/circle.png"><h1 class="h1-right">DRAW</h1>`;
    }
    else if (winner == 'circle') {
        document.getElementById('header').innerHTML = `<img class ="circle" src="./img/circle.png"><h1 class="h1-right">WINS</h1>`;
    }
    else if (winner == 'cross') {
        document.getElementById('header').innerHTML = `<img class ="cross" src="./img/cross.png"><h1 class="h1-right">WINS</h1>`;
    }

}

function makeUnclickable() {
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle' + i).parentNode.setAttribute('onclick', '');
    }
}

//functions 4 buttons

//functions for winningline