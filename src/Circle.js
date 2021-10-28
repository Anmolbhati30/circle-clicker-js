class Circle {
    constructor() {
        this.radius = 100;
        this.x = 0;
        this.y = 0;
    }

    getCoords() {
        return [this.x, this.y];
    }

    randomisePosition(x, y) {
        this.x = getRandomInt(x);
        this.y = getRandomInt(y);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}