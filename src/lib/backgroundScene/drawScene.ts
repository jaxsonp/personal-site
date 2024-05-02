let ctx: CanvasRenderingContext2D;
let width: number, height: number;

export const initializeScene = () => {
	console.debug('Initializing background scene');
};

export const configureScene = (canvas: HTMLCanvasElement) => {
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
	let skyGradient = ctx.createLinearGradient(0, 0, 0, height / 2);
	skyGradient.addColorStop(0.0, '#0E89DB');
	skyGradient.addColorStop(1.0, '#9ACDE7');
	ctx.fillStyle = skyGradient;
	ctx.fillRect(0, 0, width, height / 2);

	// ocean gradient
	let oceanGradient = ctx.createLinearGradient(0, height / 2, 0, height);
	oceanGradient.addColorStop(0.1, '#0097AE');
	oceanGradient.addColorStop(1.0, '#056198');
	ctx.fillStyle = oceanGradient;
	ctx.fillRect(0, height / 2, width, height / 2);
};

export const drawScene = () => {
	//console.debug('Drawing scene');
	/*ctx.fillStyle = 'lightblue';
	ctx.fillRect(0, 0, width, height);

	ctx.beginPath();
	ctx.arc(200, 100, 100, 0, angle);
	ctx.stroke();
	angle += 0.05;
	if (angle > Math.PI * 2) {
		angle -= Math.PI * 2;
	}*/
};
