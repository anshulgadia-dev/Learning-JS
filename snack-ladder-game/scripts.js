const roll_dice_btn = document.getElementById('roll-dice-btn');
const dice_result_div = document.getElementById('dice-result');
const current_player_div = document.getElementById('current-player');
const player_1_position_div = document.getElementById('player-1-position');
const player_2_position_div = document.getElementById('player-2-position');


let current_player = 1;
let player_positions = {
    1: 0,
    2: 0
};

let snakes = {
    36: 7,
    62: 44,
    90: 47,
    98: 61
};

let ladders = {
    12: 34,
    22: 56,
    52: 86,
    63: 77
};

function resetGame(){
    current_player = 1;
    player_positions = {
        1: 0,
        2: 0
    };
    current_player_div.textContent = `Current Player: Player ${current_player}`;
    player_1_position_div.textContent = `Player 1 Position: ${player_positions[1]}`;
    player_2_position_div.textContent = `Player 2 Position: ${player_positions[2]}`;
    dice_result_div.innerText = `Dice Result: `;
    updateAllPlayerMarkers();
}

function updateAllPlayerMarkers() {
    document.querySelectorAll('[class*="box-"]').forEach(box => {
        box.innerHTML = '';
    });
    
    const box1 = document.querySelector(`.box-${player_positions[1]}`);
    if (box1) {
        box1.innerHTML += `<img src="./assets/p1.png" class="player-1-marker w-8 h-8"/>`;
    }
    
    const box2 = document.querySelector(`.box-${player_positions[2]}`);
    if (box2) {
        box2.innerHTML += `<img src="./assets/p2.png" class="player-2-marker w-8 h-8"/>`;
    }
}

roll_dice_btn.addEventListener('click', () => {
    const dice_roll = Math.floor(Math.random() * 6) + 1;
    dice_result_div.innerText = `Dice Result: ${dice_roll}`;
    console.log(dice_roll);
    
    player_positions[current_player] += dice_roll;
    
    if (player_positions[current_player] >= 100) {
        player_positions[current_player] = 100; 
        alert(`Player ${current_player} wins!`);
        resetGame();
        return;
    }

    if (snakes[player_positions[current_player]]) {
        player_positions[current_player] = snakes[player_positions[current_player]];
    }

    if (ladders[player_positions[current_player]]) {
        player_positions[current_player] = ladders[player_positions[current_player]];
    }

    if (current_player === 1) {
        player_1_position_div.textContent = `Player 1 Position: ${player_positions[1]}`;
        current_player = 2;
    } else {
        player_2_position_div.textContent = `Player 2 Position: ${player_positions[2]}`;
        current_player = 1;
    }

    updateAllPlayerMarkers();

    current_player_div.textContent = `Current Player: Player ${current_player}`;
});

window.addEventListener('DOMContentLoaded', updateAllPlayerMarkers);

