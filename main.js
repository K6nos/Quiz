const cart = document.getElementById('cart');
const game = document.getElementById('game');
let gameInterval;
let obstacles = [];

function startGame() {
    gameInterval = setInterval(() => {
        createObstacle();
        moveObstacles();
        checkCollision();
    }, 2000);
}

function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.left = `${Math.floor(Math.random() * (game.offsetWidth - 50))}px`;
    game.appendChild(obstacle);
    obstacles.push(obstacle);
}

function moveObstacles() {
    obstacles.forEach((obstacle, index) => {
        let currentTop = parseInt(obstacle.style.top) || -50;
        obstacle.style.top = `${currentTop + 10}px`;

        if (currentTop > game.offsetHeight) {
            game.removeChild(obstacle);
            obstacles.splice(index, 1);
        }
    });
}

function checkCollision() {
    obstacles.forEach(obstacle => {
        const cartRect = cart.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();
        if (
            cartRect.left < obstacleRect.left + obstacleRect.width &&
            cartRect.left + cartRect.width > obstacleRect.left &&
            cartRect.top < obstacleRect.top + obstacleRect.height &&
            cartRect.height + cartRect.top > obstacleRect.top
        ) {
            alert('Game Over');
            clearInterval(gameInterval);
            resetGame();
        }
    });
}

function resetGame() {
    obstacles.forEach(obstacle => game.removeChild(obstacle));
    obstacles = [];
}

document.addEventListener('keydown', (e) => {
    const cartLeft = parseInt(cart.style.left);
    if (e.key === 'ArrowLeft' && cartLeft > 0) {
        cart.style.left = `${cartLeft - 10}px`;
    } else if (e.key === 'ArrowRight' && cartLeft < game.offsetWidth - 50) {
        cart.style.left = `${cartLeft + 10}px`;
    }
});

startGame();
