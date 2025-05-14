export class GameElement {
	x: number;
	y: number;
	height: number;
	width: number;
	speed: number;

	constructor(x: number, y: number, h: number, w: number, s: number) {
		this.x = x;
		this.y = y;
		this.height = h;
		this.width = w;
		this.speed = s;
	}

	draw() {}
}
