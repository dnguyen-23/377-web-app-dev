let lastOpenRow = [0, 0, 0, 0, 0, 0, 0];
let playerTurn = 1;
//each column runs horizontally
//each row runs vertically
let board = [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]];
let maxRows = 6;
let win = false;
//Depending on which svg was pressed, a token will be entered in the specified col
//colNum is the actual column number, not the index value 
function enterTkn(colNum) {
    //Col num will tell where to set the x position
    if (!win) {
        board[colNum - 1][lastOpenRow[colNum - 1]] = playerTurn;
        // printBoard();
        if (lastOpenRow[colNum -1] == maxRows) { //meaning that the current column is filled
            console.log("full column");
        } else if (playerTurn == 1) {
            xCoord = (colNum - 1) * 100 + (10 * colNum);
            yCoord = 560 - lastOpenRow[colNum -1] * 100 - 50;
            let image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            image.setAttribute('href', 'pics/adamC4Piece.jpg');
            image.setAttribute('width', '100');
            image.setAttribute('height', '100');
            image.setAttribute('x', String(xCoord));
            image.setAttribute('y', String(yCoord));
            image.setAttribute('visibility', 'visible');
            $("#board").append(image);
            lastOpenRow[colNum - 1] += 1;
            playerTurn = 2;
            console.log("player 1 placed: " + $("#board").html);
        } else if (playerTurn == 2) {
            xCoord = (colNum - 1) * 100 + (10 * colNum);
            yCoord = 560 - lastOpenRow[colNum -1] * 100 - 50;
            let image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            image.setAttribute('href', 'pics/maxC4Piece.jpg');
            image.setAttribute('width', '100');
            image.setAttribute('height', '100');
            image.setAttribute('x', String(xCoord));
            image.setAttribute('y', String(yCoord));
            image.setAttribute('visibility', 'visible');
            $("#board").append(image);
            lastOpenRow[colNum - 1] += 1;
            playerTurn = 1;
            console.log("player 2 placed: " + $("#board").html);
        }
    }

    checkWin();
}

function printBoard() {
    console.log(board);
}

function checkWin() {
    // check the rows; check up to column 3 (index @ 4)

    for (let startCol = 0; startCol < 4; startCol++) {
        for (let startRow = 0; startRow < maxRows; startRow++) {
            if (checkRow(startRow, startCol) == true) {
                win = true;
                console.log("WIN BY ROW: " + startRow);
            }

        }
    }
    // check the col
    for (let startCol = 0; startCol < 7; startCol++) {
        for (let startRow = 0; startRow < 2; startRow++) {
            if (checkCol(startRow, startCol) == true) {
                win = true;
                console.log("WIN BY COL: " + startCol);
            }
        }
    }
    for (let startCol = 0; startCol < 4; startCol++) {
        for (let startRow = 3; startRow < maxRows; startRow++) {
            if (checkTLBR(startRow, startCol) == true) {
                win = true;
                console.log("WIN BY DIAGONAL TLBR" + startRow);
            }

        }
    }
    for (let startCol = 0; startCol < 4; startCol++) {
        for (let startRow = 0; startRow < 3; startRow++) {
            if (checkBLTR(startRow, startCol) == true) {
                win = true;
                console.log("WIN BY DIAGONAL BLTR");
            }

        }
    }

    // if (win) {
    //     console.log("YOU WINNNNNNNN");
    // }
    
}

//Each row in the matrix represents the column
function checkRow(row, col) {
    let streak = 0;
    for (let i = 0; i < 4; i++) {
        let curTkn = board[col + i][row];
        if (board[col][row] == curTkn && board[col][row] != 0) {
            streak++;
        } else {
            break;
        }
    }

    if (streak == 4) {
        playerWin(board[col][row]);
        return true;
    } else {
        return false;
    }
}

function checkCol(row, col) {
    let streak = 0;
    for (let i = 0; i < 4; i++) {
        let curTkn = board[col][row + i];
        if (board[col][row] == curTkn && board[col][row] != 0) {
            streak++;
        } else {
            break;
        }
    }

    if (streak == 4) {
        playerWin(board[col][row]);
        return true;
    } else {
        return false;
    }
}

function checkBLTR(row, col) {
    let streak = 0;
    for (let i = 0; i < 4; i++) {
        let curTkn = board[col + i][row + i];
        if (board[col][row] == curTkn && board[col][row] != 0) {
            streak++;
        } else {
            break;
        }
    }

    if (streak == 4) {
        playerWin(board[col][row]);
        return true;
    } else {
        return false;
    }

}

function checkTLBR(row, col) {
    let streak = 0;
    for (let i = 0; i < 4; i++) {
        let curTkn = board[col + i][row - i];
        if (board[col][row] == curTkn && board[col][row] != 0) {
            streak++;
        } else {
            break;
        }
    }

    if (streak == 4) {
        playerWin(board[col][row]);
        return true;
    } else {
        return false;
    }
}

function playerWin(playerNum) {
    let player = "Adam";
    if (playerNum == 2) {
        player = "Max";
    }
    $("#result").html("( ._.) " + player + " WON (._. )")
}
// create function to check diagonals
// create a function to check bottom left to top right
// create a function to check bottom right and top left
//create a function that checks rows starting at bottom left and then checking four across
//--then go up the rows, then go to the left
//create a function that checks cols starting at the bottom 