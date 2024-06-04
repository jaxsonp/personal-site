import Bird from './bird';

let ctx;
let width, height;

let skyGradient, oceanGradient;
let bird;

export function initializeScene() {
	console.debug('Initializing background scene');
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

	// sky gradient
	skyGradient = ctx.createLinearGradient(0, 0, 0, height / 2);
	skyGradient.addColorStop(0.0, '#0E89DB');
	skyGradient.addColorStop(1.0, '#9ACDE7');
	ctx.fillStyle = skyGradient;
	ctx.fillRect(0, 0, width, height / 2);

	// ocean gradient
	oceanGradient = ctx.createLinearGradient(0, height / 2, 0, height);
	oceanGradient.addColorStop(0.1, '#0097AE');
	oceanGradient.addColorStop(0.3, '#056198');
	ctx.fillStyle = oceanGradient;
	ctx.fillRect(0, height / 2, width, height / 2);
}

export const drawScene = () => {
	console.debug('Drawing scene');
	/*if (bird == undefined || bird.x > width) {
		bird = new Bird(Math.random() * 200);
	}
	bird.moveAndDraw(ctx, skyGradient);*/
};
