console.log("Welcome")


// base class
class Pieces {
    constructor(id, color, position, points, isAlive) {
        this.id = id;
        this.color = color;
        this.position = position;
        this.points = points
        this.isAlive = isAlive;
    }
}

// king class
class King extends Pieces {
    constructor(id, color, position, isAlive) {
        super(id, color, position, "10", isAlive)
    }
}

// queen class
class Queen extends Pieces {
    constructor(id, color, position, isAlive) {
        super(id, color, position, "9", isAlive)
    }
}

// Bishop Class
class Bishop extends Pieces {
    constructor(id, color, position, isAlive) {
        super(id, color, position, "3", isAlive)
    }
}

// Rook Class
class Rook extends Pieces {
    constructor(id, color, position, isAlive) {
        super(id, color, position, "5", isAlive)
    }
}

// Knight Class
class Knight extends Pieces {
    constructor(id, color, position, isAlive) {
        {
            super(id, color, position, "3", isAlive)
        }
    }
}

// Pawn Class
class Pawn extends Pieces {
    constructor(id, color, position, isAlive) {
        super(id, color, position, "1", isAlive)
    }
}

const pieceName = {
    king: "King",
    queen: "Queen",
    bishop: "Bishop",
    rook: "Rook",
    knight: "Knight",
    pawn: "Pawn",
}

const pieceColor = {
    black: "Black",
    white: "White",
}

rook = [];
bishop = [];
knight = [];
pawn = [];

// Object of King Class
let k1 = new King("k1", "1*4", pieceColor.black, "yes");
let k2 = new King("k2", "8*5", pieceColor.white, "yes");

// Object of Queen Class
let q1 = new Queen("q1", "1*5", pieceColor.black, "yes");
let q2 = new Queen("q2", "8*4", pieceColor.white, "yes");
for (i in pieceName) {
    if (i == "bishop") {
        for (var j = 1; j < 3; j++) {
            const bIdBlack = j + 'bb';
            bishop.push(new Bishop(bIdBlack, null, pieceColor.black, "yes"));
            const bIdWhite = j + 'bw';
            bishop.push(new Bishop(bIdWhite, null, pieceColor.white, "yes"));
        }
    }
    else if (i == "rook") {
        for (var j = 1; j < 3; j++) {
            const rIdBlack = j + 'rb';
            const rIdWhite = j + 'rw';
            rook.push(new Rook(rIdBlack, null, pieceColor.black, "yes"));
            rook.push(new Rook(rIdWhite, null, pieceColor.white, "yes"));
        }
    }
    else if (i == "knight") {
        for (var j = 1; j < 3; j++) {
            const kIdBlack = j + 'kb';
            const kIdWhite = j + 'kw';
            knight.push(new Knight(kIdBlack, null, pieceColor.black, "yes"));
            knight.push(new Knight(kIdWhite, null, pieceColor.white, "yes"));
        }
    }
    else if (i == "pawn") {
        for (var j = 1; j < 9; j++) {
            const pIdWhite = j + 'pw';
            const pIdBlack = j + 'pb';
            const position = '2 * ' + j;
            pawn.push(new Pawn(pIdWhite, position, pieceColor.white, "yes"));
            pawn.push(new Pawn(pIdBlack, position, pieceColor.black, "yes"));
        }
    }
}
console.dir(pawn);
console.dir(bishop);
console.dir(knight);

let createChessBoard = function () {

    var table = document.getElementById("chesstable");
    for (var i = 0; i < 8; i++) {
        var rows = table.insertRow();
        for (var j = 0; j < 8; j++) {
            var column = rows.insertCell();
            if ((i + j) % 2 == 0) {
                column.style.backgroundColor = 'white';
            }
            else {
                column.style.backgroundColor = "black";
                console.log("loop23");
            }
        }
    }
}