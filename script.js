let fields = [];
let currentPlayer = 0;
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
    if (fields[0] == fields[1] && fields[1] == fields[2]) {
        winner = fields[0];
    }
    else if (fields[3] == fields[4] && fields[4] == fields[5]) {
        winner = fields[3];
    }
    else if (fields[6] == fields[7] && fields[7] == fields[8]) {
        winner = fields[6];
    }
    else if (fields[0] == fields[3] && fields[3] == fields[6]) {
        winner = fields[0];
    }
    else if (fields[1] == fields[4] && fields[4] == fields[7]) {
        winner = fields[1];
    }
    else if (fields[2] == fields[5] && fields[5] == fields[8]) {
        winner = fields[2];
    }
    else if (fields[0] == fields[4] && fields[4] == fields[8]) {
        winner = fields[0];
    }
    else if (fields[2] == fields[4] && fields[4] == fields[6]) {
        winner = fields[2];
    }
    else if(draw()){
        winner ='draw';
    }
    showWinner(winner);
};

function draw(){
    let allFieldsStamped = true;
for (let i = 0; i < fields.length; i++) {
    const element = fields[i];
    if (element == null){
        allFieldsStamped =false;
        return allFieldsStamped;
    }
}
return allFieldsStamped;
}

function showWinner(winner){
if(winner){
makeUnclickable();
console.log(winner);
}
}

function makeUnclickable(){
for (let i = 0; i < 9; i++) {
   document.getElementById('circle'+i).parentNode.setAttribute('onclick', '');
    
}

}