// begin modal 
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
// end modal 

// begin nav
const headerNav = document.querySelector('#header');
const menuMobile = document.querySelector('.mobile-menu-btn');
var currentHeight = headerNav.clientHeight;

// Đóng mở menu mobile
menuMobile.onclick = function() {
        if (headerNav.clientHeight === currentHeight) {
            console.log('a');
            return headerNav.style.height = 'auto';
        } else {
            console.log('b');
            return headerNav.style.height = null;
        }
    }
    //-------- Tự động đóng khi click chọn mennu
const menuItems = document.querySelectorAll('#header li a[href*="#"]');

for (let i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    console.log(menuItem.nextElementSibling)
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();

        } else {
            headerNav.style.height = null;
        }
    }
};