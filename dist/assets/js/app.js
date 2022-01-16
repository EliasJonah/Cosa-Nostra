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

    try {
        modalTrigger.addEventListener('click', () => {
            openModal();
        })
    } catch(e) {
        console.log(e);
    }


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

    const slides = document.querySelectorAll('.portfolio__item'),
          prev = document.querySelector('.portfolio__arrow__left'),
          next = document.querySelector('.portfolio__arrow__right'),
          slidesWrapper = document.querySelector('.portfolio__items'),
          slidesField = document.querySelector('.portfolio__items__inner'),
          width = '225.5px';

    let offset = 0;

    try {
        slidesField.style.width = '677px';
    } catch(e) {
        console.error(e);
    }
    

    try {
        next.addEventListener('click', () => {
            if (offset == +width.slice(0, width.length - 2) * 3) {
                offset = 0;
            } else {
                offset += +width.slice(0, width.length - 2);
            }
    
            slidesField.style.transform = `translateX(-${offset}px)`;
        })
    } catch(e) {
        console.error(e);
    }

    try {
        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = +width.slice(0, width.length - 2) * 3;
            } else {
                offset -= +width.slice(0, width.length - 2);
            }
    
            slidesField.style.transform = `translateX(-${offset}px)`;
        })
    } catch(e) {
        console.error(e);
    }

    



});