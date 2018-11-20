class Piece {

    constructor(color, position, image, point, name) {
        this.color = color;
        this.position = position;
        this.image = image;
        this.point = point;
        this.name = name;
    }
}

class King extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}
class Queen extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}

class Bishop extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}
class Rook extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}

class Knight extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}

class Pawn extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}

//black party

const blackking = new Piece("black", "8E","blackking_img",1,"blackking");
const blackqueen = new Piece("black", "8D","blackqueen_img",1,"blackqueen");
const whitepawn1 = new Piece("black", "8A","whitepawn1_img",1,"whitepawn1");
const blackrook2 = new Piece("black", "8H","whitepawn2_img",1,"whitepawn2");
const blackknight1 = new Piece("black", "8B","blackknight1_img",1,"blackknight1");
const blackknight2 = new Piece("black", "1G","blackknight2_img",1,"blackknight2");
const blackbishop1 = new Piece("black", "1C","blackbishop1_img",1,"blackbishop1");
const blackbishop2 = new Piece("black", "1F","blackbishop2_img",1,"blackbishop2");
const blackpawn1 = new Piece("black", "2A","blackpawn1_img",1,"blackpawn1");
const blackpawn2 = new Piece("black", "2B","blackpawn2_img",1,"blackpawn2");
const blackpawn3 = new Piece("black", "2C","blackpawn3_img",1,"blackpawn3");
const blackpawn4 = new Piece("black", "2D","blackpawn4_img",1,"blackpawn4");
const blackpawn5 = new Piece("black", "2E","blackpawn5_img",1,"blackpawn5");
const blackpawn6 = new Piece("black", "2F","blackpawn6_img",1,"blackpawn6");
const blackpawn7 = new Piece("black", "2G","blackpawn7_img",1,"blackpawn7");
const blackpawn8 = new Piece("black", "2H","blackpawn8_img",1,"blackpawn8");

//white party
const whiteking = new Piece("White", "1E","whiteking_img",1,"whiteking");
const whitequeen = new Piece("White", "1D","whitequeen_img",1,"whitequeen");
const whiterook1 = new Piece("White", "1A","whiterook1_img",1,"whiterook1");
const whiterook2 = new Piece("White", "1H","whiterook2_img",1,"whiterook2");
const whiteknight1 = new Piece("White", "1B","whiteknight1_img",1,"whiteknight1");
const whiteknight2 = new Piece("White", "1G","whiteknight2_img",1,"whiteknight2");
const whitebishop1 = new Piece("White", "1C","whitebishop1_img",1,"whitebishop1");
const whitebishop2 = new Piece("White", "1F","whitebishop2_img",1,"whitebishop2");
const whitepawn1 = new Piece("White", "2A","whitepawn1",1,"whitepawn1");
const whitepawn2 = new Piece("White", "2B","whitepawn2",1,"whitepawn2");
const whitepawn3 = new Piece("White", "2C","whitepawn3",1,"whitepawn3");
const whitepawn4 = new Piece("White", "2D","whitepawn4",1,"whitepawn4");
const whitepawn5 = new Piece("White", "2E","whitepawn5",1,"whitepawn5");
const whitepawn6 = new Piece("White", "2F","whitepawn6",1,"whitepawn6");
const whitepawn7 = new Piece("White", "2G","whitepawn7",1,"whitepawn7");
const whitepawn8 = new Piece("White", "2H","whitepawn8",1,"whitepawn8");

