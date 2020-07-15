document.addEventListener("keydown", function(event) {
	if (event.keyCode == 37) {
		document.getElementById("box4").style.left = box4.getBoundingClientRect().left - 50 + 'px'
	}

	else if (event.keyCode == 39) {
		document.getElementById("box4").style.left = box4.getBoundingClientRect().left + 50 + 'px'
	}
})


let scoreValue = 0;

let ballX = 100;
let ballY = 100;

let ballMoveX = 10;
let ballMoveY = 10;

function moveBall() {
	let ball = document.getElementById("ball");
	ballX = ballX + ballMoveX;
	ballY = ballY + ballMoveY;
	ball.style.left = ballX + "px";
	ball.style.top = ballY + "px";
	if (ball.getBoundingClientRect().left - 30 < 0 || ball.getBoundingClientRect().left + 30 > document.body.clientWidth) ballMoveX = -1*ballMoveX;
	if (ball.getBoundingClientRect().top -30 < 0) ballMoveY = -1*ballMoveY;
}

function collisionMovingBox () {
	let box = document.getElementById("box4").getBoundingClientRect();
	let ball = document.getElementById("ball").getBoundingClientRect();

	if (ball.top + 60 > box.top) {
		if (ball.left + 25 > box.left && ball.right - 25 < box.right) {
			ballMoveY = -1*ballMoveY;
			scoreValue = scoreValue + 1;
			score = document.getElementById("score");
			score.innerHTML = "Score: " + scoreValue;

			if (ballMoveX < 0) {
				ballMoveX = ballMoveX - 1;
			}
			else {
				ballMoveX = ballMoveX + 1;
			}

			if (ballMoveY < 0) {
				ballMoveY = ballMoveY - 1;
			}
			else {
				ballMoveY = ballMoveY + 1;
			}
		}

		else {
			clearInterval(moveBallInterval);
			clearInterval(collisionBoxInterval);
			document.body.className = "bgred"
			ballX = 100;
			ballY = 100;
			setTimeout(function () {
				document.body.className = ""
				moveBallInterval = setInterval(moveBall, 50)
				collisionBoxInterval = setInterval(collisionMovingBox, 50)
				score = document.getElementById("score");
				score.innerHTML = "Score: 0";
			}, 3000);
		}
	}
}


let moveBallInterval = setInterval(moveBall, 50)
let collisionBoxInterval = setInterval(collisionMovingBox, 50)
