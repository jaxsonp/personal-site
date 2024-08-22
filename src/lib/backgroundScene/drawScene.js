const STARS_PER_PX = 0.00025;

let ctx;
let width, height;

let stars;

class Star {
	x;
	y;
	size;

	constructor(w, h) {
		this.x = Math.random() * w;
		this.y = Math.random() * h;
		this.size = Math.random() ** 2 * 2;
	}

	draw() {
		if (this.x < width && this.y < height) {
			ctx.beginPath();
			ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, 2 * Math.PI);
			ctx.fill();
		}
	}
}

export function initializeScene(w, h) {
	console.debug('Initializing background scene');
	stars = [];
	let n_stars = parseInt(w * h * STARS_PER_PX);
	console.debug('n stars:', n_stars);
	for (let i = 0; i < n_stars; i++) {
		stars.push(new Star(w, h));
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
