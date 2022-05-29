let fields = [];
let currentPlayer = 0;
let possibleWin =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
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
    currentPlayer++;
}


function circleMove(id) {
    fields[id] = 'circle';
    document.getElementById('circle' + id).classList.remove('d-none');
    checkWin();
    currentPlayer++;
}


function checkWin() {
    let winner;
    let winning= false;
    for (let i = 0; i < possibleWin.length; i++) {
        const element = possibleWin[i];
        if (fields[element[0]] == fields[element[1]] && fields[element[1]] == fields[element[2]]) { winner = fields[element[0]]; winning = true;}
    }
    if(currentPlayer==8 && !winning){ winner ='draw';}
    showWinner(winner);
};


function showWinner(winner) {
    if (winner) {
        makeUnclickable();
        console.log(winner);
    }
}


function makeUnclickable() {
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle' + i).parentNode.setAttribute('onclick', '');
    }
}
