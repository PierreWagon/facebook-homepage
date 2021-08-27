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

  /* ------------------------------------------------------------- */
 /* ------------------- MAIN MENU MIDDLE PART ------------------- */
/* ------------------------------------------------------------- */

// Scrolls between stories with on-screen arrows
const storyRightArrow = document.getElementById('stories-go-right');
const storyLeftArrow = document.getElementById('stories-go-left');
const storyList = document.querySelectorAll('.main-wrapper-middle-stories-item');

storyRightArrow.addEventListener('click', function() {
    storyList.forEach(story => {
        story.classList.add('active');
    })
    storyLeftArrow.style.display = "block";
    storyRightArrow.style.display = "none";
    
})

storyLeftArrow.addEventListener('click', function() {
    storyList.forEach(story => {
        story.classList.remove('active');
    })
    storyRightArrow.style.display = "block";
    storyLeftArrow.style.display = "none";
})


// Shows and hides publication modal
const publicationModalOpen = document.querySelector('.create-publication');
const publicationModalClose = document.querySelector('.main-wrapper-middle-publication-modal-close');
const publicationModal = document.querySelector('.main-wrapper-middle-publication-modal');
// Variable below prevents user from clicking on main page when modal is showing
const publicationModalSecurity = document.querySelector('.main-wrapper-middle-publication-modal-event-disabler');

publicationModalOpen.addEventListener('click', function() {
    publicationModal.classList.add('active');
    publicationModalSecurity.classList.add('active');
})

publicationModalClose.addEventListener('click', function() {
    publicationModal.classList.remove('active');
    publicationModalSecurity.classList.remove('active');
})

publicationModalSecurity.addEventListener('click', function() {
    publicationModal.classList.remove('active');
    publicationModalSecurity.classList.remove('active');
})


// Enables or disables publication's submit button
const publicationInput = document.querySelector('.main-wrapper-middle-publication-modal-input');
const publicationBtn = document.querySelector('.publication-modal-btn');

publicationInput.addEventListener('input', function() {
    if (publicationInput.value == '') {
        publicationBtn.disabled = true;
    }
    else {
        publicationBtn.disabled = false;
    }
})

publicationBtn.addEventListener('click', function() {
    publicationModal.classList.remove('active');
    publicationModalSecurity.classList.remove('active');
})


// Slides between video chatroom contacts
const chatRoomRightArrow = document.getElementById('videoroom-arrow-right');
const chatRoomLeftArrow = document.getElementById('videoroom-arrow-left');
const chatRoomContacts = document.querySelectorAll('.videoroom-button-contacts');

chatRoomRightArrow.addEventListener('click', function() {
    chatRoomContacts.forEach(contact => {
        contact.classList.add('active');
    })
    chatRoomLeftArrow.style.display = "block";
    chatRoomRightArrow.style.display = "none";
    
})

chatRoomLeftArrow.addEventListener('click', function() {
    chatRoomContacts.forEach(contact => {
        contact.classList.remove('active');
    })
    chatRoomRightArrow.style.display = "block";
    chatRoomLeftArrow.style.display = "none";
})


// Turns like button to blue when activated and adds 1 to like counter
const likeBtns = document.querySelectorAll('.main-wrapper-middle-static-publication-reactions-item.like');

likeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
            btn.parentNode.previousElementSibling.querySelector('.main-wrapper-middle-static-publication-likes-number').innerText = parseInt(btn.parentNode.previousElementSibling.querySelector('.main-wrapper-middle-static-publication-likes-number').innerText, 10) + 1;
        }
        else {
            btn.parentNode.previousElementSibling.querySelector('.main-wrapper-middle-static-publication-likes-number').innerText = parseInt(btn.parentNode.previousElementSibling.querySelector('.main-wrapper-middle-static-publication-likes-number').innerText, 10) - 1;
        }
    })
})

// Puts focus on comment input when clicking on comment button
const commentBtns = document.querySelectorAll('.main-wrapper-middle-static-publication-reactions-item.comment');

commentBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.parentNode.nextElementSibling.querySelector('input').focus();
    })
})