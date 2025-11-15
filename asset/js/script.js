const canvas = document.getElementById('canvas_dessin');

canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.8;

var keyBindings = {
    up : "ArrowUp",
    down : "ArrowDown",
    left : "ArrowLeft",
    right : "ArrowRight",
    jump : "Space",
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
    if (Object.values(keyBindings).includes(event.code)) {
        console.log(`Key pressed: ${event.key}`);
    }
});