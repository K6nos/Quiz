const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

const player = {
    x: 50,
    y: 50,
    size: 20,
    color: 'blue',
    inventory: []
};

const materials = [
    { x: 100, y: 100, type: 'wood' },
    { x: 200, y: 150, type: 'wood' },
    { x: 300, y: 200, type: 'wood' },
    { x: 150, y: 250, type: 'wood' },
    { x: 400, y: 300, type: 'wood' }
];

const ship = {
    x: canvas.width / 2 - 30,
    y: canvas.height - 60,
    size: 60,
    color: 'green',
    visible: false
};

const enemies = [
    { x: 400, y: 400, size: 20, color: 'red', speed: 4 }
];

const obstacles = [
    { x: 250, y: 250, size: 40, color: 'gray' },
    { x: 500, y: 300, size: 40, color: 'gray' },
    { x: 350, y: 100, size: 40, color: 'gray' }
];

function drawPlayer() {
    context.fillStyle = player.color;
    context.fillRect(player.x, player.y, player.size, player.size);
}

function drawMaterials() {
    materials.forEach(material => {
        context.fillStyle = material.type === 'wood' ? 'brown' : 'gray';
        context.fillRect(material.x, material.y, player.size, player.size);
    });
}

function drawShip() {
    if (ship.visible) {
        context.fillStyle = ship.color;
        context.fillRect(ship.x, ship.y, ship.size, ship.size);
    }
}

function drawEnemies() {
    enemies.forEach(enemy => {
        context.fillStyle = enemy.color;
        context.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
    });
}

function drawObstacles() {
    obstacles.forEach(obstacle => {
        context.fillStyle = obstacle.color;
        context.fillRect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);
    });
}

function updateGame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawMaterials();
    drawEnemies();
    drawShip();
    drawObstacles();
    moveEnemies();
    checkVictory();
    checkCollisionWithEnemies();
    checkCollisionWithObstacles();
    checkAllMaterialsCollected();
}

function handleInput(event) {
    const key = event.key;
    let newX = player.x;
    let newY = player.y;

    if (key === 'ArrowUp') newY -= 10;
    if (key === 'ArrowDown') newY += 10;
    if (key === 'ArrowLeft') newX -= 10;
    if (key === 'ArrowRight') newX += 10;

    if (!isCollidingWithWall(newX, newY) && !isCollidingWithObstacle(newX, newY)) {
        player.x = newX;
        player.y = newY;
    }

    collectMaterial();
    updateGame();
}

function isCollidingWithWall(x, y) {
    return (x < 0 || x + player.size > canvas.width || y < 0 || y + player.size > canvas.height);
}

function isCollidingWithObstacle(x, y) {
    return obstacles.some(obstacle => {
        return (
            x < obstacle.x + obstacle.size &&
            x + player.size > obstacle.x &&
            y < obstacle.y + obstacle.size &&
            y + player.size > obstacle.y
        );
    });
}

function collectMaterial() {
    materials.forEach((material, index) => {
        if (
            player.x < material.x + player.size &&
            player.x + player.size > material.x &&
            player.y < material.y + player.size &&
            player.y + player.size > material.y
        ) {
            player.inventory.push(material.type);
            materials.splice(index, 1);
        }
    });
}

function moveEnemies() {
    enemies.forEach(enemy => {
        let dx = player.x - enemy.x;
        let dy = player.y - enemy.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0) {
            let nextX = enemy.x + (dx / distance) * enemy.speed;
            let nextY = enemy.y + (dy / distance) * enemy.speed;

            if (!isCollidingWithObstacle(nextX, nextY)) {
                enemy.x = nextX;
                enemy.y = nextY;
            }
        }
    });
}

function checkVictory() {
    if (
        ship.visible &&
        player.x < ship.x + ship.size &&
        player.x + player.size > ship.x &&
        player.y < ship.y + ship.size &&
        player.y + player.size > ship.y
    ) {
        alert('船に到達しました！島から脱出成功！');
        returnToTitleScreen();
    }
}

function checkCollisionWithEnemies() {
    enemies.forEach(enemy => {
        if (
            player.x < enemy.x + enemy.size &&
            player.x + player.size > enemy.x &&
            player.y < enemy.y + enemy.size &&
            player.y + player.size > enemy.y
        ) {
            // クイズ画面に移動
            document.getElementById('gameCanvas').style.display = 'none';
            document.getElementById('quizScreen').style.display = 'block';
        }
    });
}

function checkCollisionWithObstacles() {
    if (isCollidingWithObstacle(player.x, player.y)) {
        alert('障害物に衝突しました！ゲームオーバー');
        returnToTitleScreen();
    }
}

function checkAllMaterialsCollected() {
    if (materials.length === 0) {
        ship.visible = true;
    }
}

function startGame() {
    document.getElementById('titleScreen').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'block';
    document.getElementById('quizScreen').style.display = 'none';
    game_is_running = true;
    updateGame();
}

function returnToTitleScreen() {
    document.getElementById('titleScreen').style.display = 'block';
    document.getElementById('gameCanvas').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'none';
    game_is_running = false;
    resetGame();
}

function resetGame() {
    player.x = 50;
    player.y = 50;
    player.inventory = [];
    ship.visible = false; // Ship visibility reset
    materials.push(
        { x: 100, y: 100, type: 'wood' },
        { x: 200, y: 150, type: 'wood' },
        { x: 300, y: 200, type: 'wood' },
        { x: 150, y: 250, type: 'wood' },
        { x: 400, y: 300, type: 'wood' }
    );
    enemies.forEach(enemy => {
        enemy.x = Math.random() * (canvas.width - enemy.size);
        enemy.y = Math.random() * (canvas.height - enemy.size);
    });
}

window.addEventListener('keydown', handleInput);
