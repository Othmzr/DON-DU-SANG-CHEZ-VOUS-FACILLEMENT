// Effet de gouttes de sang animées
document.addEventListener('DOMContentLoaded', function() {
    const bloodDrops = document.createElement('div');
    bloodDrops.classList.add('blood-drops');
    document.body.appendChild(bloodDrops);

    for (let i = 0; i < 20; i++) {
        const drop = document.createElement('div');
        drop.classList.add('blood-drop');
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
        bloodDrops.appendChild(drop);
    }
});
