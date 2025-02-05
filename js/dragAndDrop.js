/* == Araste de cartas ==*/

document.addEventListener('dragstart', event => {
    if (event.target.classList.contains('card')) {
        event.target.classList.add('dragging');
    }
});

document.addEventListener('dragend', event => {
    if (event.target.classList.contains('card')) {
        event.target.classList.remove('dragging');
    }
});



/* == Aceite de colunas == */
document.querySelectorAll('.dropZone').forEach(column => {
    column.addEventListener('dragover', event => {
        event.preventDefault();
        event.currentTarget.classList.add('hover');
    });

    column.addEventListener('dragleave', event => {
        event.currentTarget.classList.remove('hover');
    });

    column.addEventListener('drop', event => {
        event.preventDefault();

        const dropZone = event.target.closest('.dropZone');
        const dragCard = document.querySelector('.card.dragging');

        if (dropZone && dragCard) {
            dropZone.appendChild(dragCard);
        }

        if (dropZone) {
            dropZone.classList.remove('hover');
        }
    });
});
