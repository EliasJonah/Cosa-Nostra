window.addEventListener('DOMContentLoaded', () => {
    /////////// Modal
    const modalTrigger = document.querySelector('[data-modal]'),
          modal = document.querySelector('.modal__open'),
          modalCloseBtn = document.querySelector('[data-close]');



    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    modalTrigger.addEventListener('click', () => {
        openModal();
    })

    modalCloseBtn.addEventListener('click', () => {
        closeModal();
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            closeModal();
        }
    })

    
    /////////// Slider
})