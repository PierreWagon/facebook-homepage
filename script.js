/* ------------------------------------------------------------- */
/* -------------------------- NAV BAR -------------------------- */
/* ------------------------------------------------------------- */

// Hiding FB logo and displaying history when focusing on search input
const fbIcon = document.querySelector('.fb-icon');
const searchInput = document.getElementById('navbar-search');
const searchResult = document.querySelector('.search-modal');

searchInput.addEventListener('focus', e => {
    fbIcon.classList.add('hidden');
    searchResult.classList.add('active');
})

searchInput.addEventListener('blur', e => {
    fbIcon.classList.remove('hidden');
    searchResult.classList.remove('active');
})


// Displaying menu modal
const menuBtn = document.getElementById('menu-btn');
const menuModal = document.querySelector('.menu-modal');

menuBtn.addEventListener('click', e => {
    menuModal.classList.toggle('active');
    menuBtn.classList.toggle('active');

    messengerModal.classList.remove('active');
    messengerBtn.classList.remove('active');
})

// Displaying messenger modal
const messengerBtn = document.getElementById('messenger-btn');
const messengerModal = document.querySelector('.messenger-modal');

messengerBtn.addEventListener('click', e => {
    messengerModal.classList.toggle('active');
    messengerBtn.classList.toggle('active');

    menuModal.classList.remove('active');
    menuBtn.classList.remove('active');
})

// Displaying notification modal
const notificationBtn = document.getElementById('notification-btn');
//const notificationModal = document.querySelector('.notification-modal');

notificationBtn.addEventListener('click', e => {
    //notificationModal.classList.toggle('active');
    notificationBtn.classList.toggle('active');
})

// Displaying more modal
const moreBtn = document.getElementById('more-btn');
//const moreModal = document.querySelector('.more-modal');

moreBtn.addEventListener('click', e => {
    //moreModal.classList.toggle('active');
    moreBtn.classList.toggle('active');
})

// Ne pas oublier de fermer les autres modales et d'enlever les classes Active quand on clique sur un nouvel onglet