let attempts = 0;
const maxAttempts = 3;
let playerName = "User";

const fruits = ['🍎', '🍐', '🍋', '🍑', '🍒'];

window.onload = () => {
    let name = prompt("Введіть ваше ім'я для початку гри:", "User");
    if (name && name.trim() !== "") {
        playerName = name.trim();
    }
    document.getElementById("userName").innerHTML = playerName;
    
    generateGrid();
    attempts = 0;
    document.getElementById("attemptCount").innerHTML = `Спроба 0 з 3`;
};

function getUniqueColumn() {
    let shuffled = [...fruits].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

function generateGrid() {
    let col0 = getUniqueColumn();
    let col1 = getUniqueColumn();
    let col2 = getUniqueColumn();

    let grid = [col0, col1, col2];

    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.transform = 'scale(0.2)';
        cell.style.opacity = '0.3';
        cell.style.backgroundColor = "#6a7fc1";
    });

    setTimeout(() => {
        for (let c = 0; c < 3; c++) {
            for (let r = 0; r < 3; r++) {
                document.getElementById(`c${c}r${r}`).innerHTML = grid[c][r];
            }
        }
        cells.forEach(cell => {
            cell.style.transform = 'scale(1)';
            cell.style.opacity = '1';
        });
    }, 200);

    return grid;
}

function playGame() {
    if (attempts >= maxAttempts) return;

    attempts++;
    document.getElementById("attemptCount").innerHTML = `Спроба ${attempts} з 3`;

    let grid = generateGrid();

    let isWin = false;
    let winRow = -1;

    for (let r = 0; r < 3; r++) {
        if (grid[0][r] === grid[1][r] && grid[1][r] === grid[2][r]) {
            isWin = true;
            winRow = r;
            break;
        }
    }

    setTimeout(() => {
        if (isWin) {
            document.getElementById(`c0r${winRow}`).style.backgroundColor = "gold";
            document.getElementById(`c1r${winRow}`).style.backgroundColor = "gold";
            document.getElementById(`c2r${winRow}`).style.backgroundColor = "gold";
            
            document.getElementById("generateBtn").disabled = true;
            setTimeout(() => alert(`Джекпот! Вітаємо, ${playerName}, ви перемогли!`), 100);
        } else if (attempts === maxAttempts) {
            document.getElementById("generateBtn").disabled = true;
            alert(`Спроби вичерпано. На жаль, ви програли, ${playerName}.`);
        }
    }, 300);
}
