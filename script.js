document.addEventListener('DOMContentLoaded', function () {
    const wheel = document.getElementById('emotionWheel');
    let isDragging = false;
    let originX = 0;
    let currentAngle = 0;

    wheel.addEventListener('mousedown', (e) => {
        isDragging = true;
        originX = e.clientX;
        wheel.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - originX;
            const rotationFactor = 0.5; // Adjust rotation sensitivity
            currentAngle += deltaX * rotationFactor;
            wheel.style.transform = `rotate(${currentAngle}deg)`;
            originX = e.clientX;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        wheel.style.cursor = 'grab';
    });
});
