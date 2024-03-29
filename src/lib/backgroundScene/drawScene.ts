let ctx: CanvasRenderingContext2D;
let width: number;
let height: number;
let angle = 0;

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
};

export const drawScene = () => {
	//console.debug('Drawing scene');

	ctx.fillStyle = 'lightblue';
	ctx.fillRect(0, 0, width, height);

	ctx.beginPath();
	ctx.arc(200, 100, 100, 0, angle);
	ctx.stroke();
	angle += 0.05;
	if (angle > Math.PI * 2) {
		angle -= Math.PI * 2;
	}
};
