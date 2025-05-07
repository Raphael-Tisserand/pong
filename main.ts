const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 4;

function draw() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
	ctx.fill();
}

function update() {
	ballX += ballSpeedX;
	ballY += ballSpeedY;

	if (ballY <= 0 || ballY >= canvas.height) {
		ballSpeedY = -ballSpeedY;
	}
}

function gameLoop() {
	update();
	draw();
	requestAnimationFrame(gameLoop);
}

gameLoop();
