document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas_dessin');
    DrawGrid(canvas);
});

var keyBindings_Player1 = {
    up: "KeyZ",
    down: "KeyW",
    left: "KeyD",
    right: "KeyA",
    jump: "Space"
};

var keyBindings_Player2 = {
    up: "KeyM",
    down: "KeyK",
    left: "KeyO",
    right: "Comma",
    jump: "Space"
};

function DrawGrid(canvas){
    const ctx = canvas.getContext('2d');

    const pointSize = 10
    const width = canvas.width;
    const height = canvas.height;

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1

    //Pour les lignes verticales
    for(let x = 0; x <= width; x += pointSize){
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    //Pour les lignes horizontales
    for(let y = 0; y <= height; y += pointSize){
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}

function ouvrirPlus(id) {
    document.getElementById(id).style.display = "flex";
}

function fermerPlus(id) {
    document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
    let modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

window.addEventListener('keydown', (event) => {
    if (Object.values(keyBindings_Player1).includes(event.code)) {
        console.log(`Key pressed P1: ${event.key}`);
    }

    if (Object.values(keyBindings_Player2).includes(event.code)) {
        console.log(`Key pressed P2: ${event.key}`);
    }
});