let fields = [];
let currentPlayer = 0;
//player equal cross ....player odd circle
function stampSign(id) {

    if (currentPlayer % 2 == 0 && fields[id] == null) {
        fields[id] = 'cross';
        document.getElementById('cross' + id).classList.remove('d-none');
        checkWin();
        currentPlayer++;
    }
    else if(!currentPlayer % 2 == 0 && fields[id] == null){
        fields[id] = 'circle';
        document.getElementById('circle' + id).classList.remove('d-none');
        checkWin();
        currentPlayer++;
    }
}

function checkWin(){

    console.log(fields);
};


