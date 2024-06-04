export default class Bird {
	static speed = 1;
	static size = 20.0;
	x = 0.0;
	y = 0.0;

	constructor(y) {
		this.x = -Bird.size;
		this.y = y;
	}

	moveAndDraw(ctx, skyFill) {
		ctx.fillStyle = skyFill;
		ctx.fillRect(this.x, this.y, Bird.size, Bird.size);

		this.x += Bird.speed;

		ctx.fillStyle = 'black';

		ctx.fillRect(this.x, this.y, Bird.size, Bird.size);
	}
}
