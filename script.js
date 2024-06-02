document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('draggableImage');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    function startDrag(e) {
        isDragging = true;
        let clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        let clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        offsetX = clientX - img.offsetLeft;
        offsetY = clientY - img.offsetTop;
        img.style.cursor = 'grabbing';
    }

    function doDrag(e) {
        if (isDragging) {
            let clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            let clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
            img.style.left = `${clientX - offsetX}px`;
            img.style.top = `${clientY - offsetY}px`;
        }
    }

    function endDrag() {
        isDragging = false;
        img.style.cursor = 'grab';
    }

    img.addEventListener('mousedown', startDrag);
    img.addEventListener('touchstart', startDrag);
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('touchmove', doDrag);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);
});
