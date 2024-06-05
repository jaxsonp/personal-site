let ctx;
let width, height;

let stars;

class Star {
	x;
	y;
	size;

	constructor() {
		this.x = Math.random();
		this.y = Math.random();
		this.size = Math.random() ** 2 * 2;
	}

	draw() {
		ctx.beginPath();
		ctx.ellipse(this.x * width, this.y * height, this.size, this.size, 0, 0, 2 * Math.PI);
		ctx.fill();
	}
}

export function initializeScene() {
	console.debug('Initializing background scene');
	stars = [];
	for (let i = 0; i < 100; i++) {
		stars.push(new Star());
	}
}

export function updateCanvas(canvas) {
	console.debug('Configuring background scene');
	width = canvas.width;
	height = canvas.height;
	let new_ctx = canvas.getContext('2d');
	if (new_ctx == null) {
		console.error('Failed to get context from canvas');
		return;
	}
	ctx = new_ctx;

	ctx.fillStyle = 'white';
	for (let i = 0; i < stars.length; i++) {
		stars[i].draw();
	}
}

export const drawScene = () => {
	console.debug('Drawing scene');
};
