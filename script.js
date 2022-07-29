'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalOpenBtn = document.querySelectorAll('.show-modal');
const modalCloseBtn = document.querySelector('.close-modal');

// console.log(modalOpenBtn.length);

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < modalOpenBtn.length; i++){
    modalOpenBtn[i].addEventListener('click', openModal);
};


modalCloseBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(e){
    console.log(e.key);
    
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
            closeModal();
    }
})
