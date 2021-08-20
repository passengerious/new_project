(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal(e) {
      e.preventDefault();
      refs.modal.classList.toggle('backdrop--is-hidden');
    }
  })();

  (() => {
    document.querySelector('.modal').addEventListener('submit', (e) => {
      e.preventDefault();
  
      new FormData(e.currentTarget).forEach((value, name) =>
        console.log(`${name}: ${value}`),
      );
  
      e.currentTarget.reset();
    });
  })();