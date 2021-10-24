const buyBtns = document.querySelectorAll('.js-buy-tickets');
const openModal = document.querySelector('.modal')
const closeModal = document.querySelector('.js-modal-close')
const stopBubbling = document.querySelector('.js-modal-container')
    //add open
function showBuyTickets() {
    openModal.classList.add('open')
};

//remove open
closeModal.addEventListener('click', function hideBuyTickets() {
    openModal.classList.remove('open')
})
openModal.addEventListener('click', function hideBuyTickets() {
        openModal.classList.remove('open')
    })
    // stop Bubbling

stopBubbling.addEventListener('click', function(event) {
    event.stopPropagation();
})

// loop 3 keys buy tickets
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}