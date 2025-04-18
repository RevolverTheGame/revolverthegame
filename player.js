export class Player {

    constructor(x, y, dx, dy, c) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = 15;
        this.c = c;
        this.spin = false;
    }

    draw() {
        //circle
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.c.fillStyle = 'blue';
        this.c.fill();

        //square
        this.c.beginPath();
        this.c.rect(this.x - 2.5, this.y + 25, 5, 15);
        this.c.fillStyle = 'blue';
        this.c.fill();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
    }

    setSpin(spin) {
        this.spin = spin;
    }
}
