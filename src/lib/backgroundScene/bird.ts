export default class Bird {
	static speed = 1;
	static size = 20.0;
	x: number;
	y: number;

	constructor(y: number) {
		this.x = -Bird.size;
		this.y = y;
	}

	moveAndDraw(ctx: CanvasRenderingContext2D, skyFill: CanvasGradient): void {
		ctx.fillStyle = skyFill;
		ctx.fillRect(this.x, this.y, Bird.size, Bird.size);

		this.x += Bird.speed;

		ctx.fillStyle = 'black';
		/*ctx.beginPath();
		ctx.ellipse(
			this.x + Bird.size / 2,
			this.y + Bird.size / 2,
			Bird.size,
			Bird.size,
			0,
			0,
			2 * Math.PI
		);
		ctx.stroke();*/
		ctx.fillRect(this.x, this.y, Bird.size, Bird.size);
	}
}
