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
    notificationModal.classList.remove('active');
    notificationBtn.classList.remove('active');
    moreModal.classList.remove('active');
    moreBtn.classList.remove('active');
})

// Displaying messenger modal
const messengerBtn = document.getElementById('messenger-btn');
const messengerModal = document.querySelector('.messenger-modal');

messengerBtn.addEventListener('click', e => {
    messengerModal.classList.toggle('active');
    messengerBtn.classList.toggle('active');

    menuModal.classList.remove('active');
    menuBtn.classList.remove('active');
    notificationModal.classList.remove('active');
    notificationBtn.classList.remove('active');
    moreModal.classList.remove('active');
    moreBtn.classList.remove('active');
})

// Displaying notification modal
const notificationBtn = document.getElementById('notification-btn');
const notificationModal = document.querySelector('.notification-modal');

notificationBtn.addEventListener('click', e => {
    notificationModal.classList.toggle('active');
    notificationBtn.classList.toggle('active');

    messengerModal.classList.remove('active');
    messengerBtn.classList.remove('active');
    menuModal.classList.remove('active');
    menuBtn.classList.remove('active');
    moreModal.classList.remove('active');
    moreBtn.classList.remove('active');
})

// Displaying more modal
const moreBtn = document.getElementById('more-btn');
const moreModal = document.querySelector('.more-modal');

moreBtn.addEventListener('click', e => {
    moreModal.classList.toggle('active');
    moreBtn.classList.toggle('active');

    messengerModal.classList.remove('active');
    messengerBtn.classList.remove('active');
    menuModal.classList.remove('active');
    menuBtn.classList.remove('active');
    notificationModal.classList.remove('active');
    notificationBtn.classList.remove('active');
})

  /* ------------------------------------------------------------- */
 /* ------------------- MAIN MENU LEFT PART --------------------- */
/* ------------------------------------------------------------- */

// Displays more shortcuts clicking on "Voir plus" button
const voirPlusBtn = document.getElementById('main-wrapper-left-voir-plus');
const hiddenOptions = document.querySelectorAll('.main-wrapper-left-options-list.hidden');
const voirPlusCredits = document.querySelector('.more-modal-credits.main-wrapper-left-credits');
let voirPlusIsActive = false;

voirPlusBtn.addEventListener('click', e => {
    hiddenOptions.forEach(option => {
        option.classList.toggle('hidden');
    })
    if (!voirPlusIsActive) {
        document.querySelector('#main-wrapper-left-voir-plus p').textContent = "Voir moins";
        voirPlusIsActive = true;
        document.querySelector('#main-wrapper-left-voir-plus img').style.transform = "rotate(180deg)";
        voirPlusCredits.classList.add('active');
    }
    else {
        document.querySelector('#main-wrapper-left-voir-plus p').textContent = "Voir plus";
        voirPlusIsActive = false;
        document.querySelector('#main-wrapper-left-voir-plus img').style.transform = "rotate(0deg)";
        voirPlusCredits.classList.remove('active');
    }
})