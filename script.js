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
    addPublication(publicationInput.value);
    publicationInput.value = "";
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
let likeBtns = document.querySelectorAll('.main-wrapper-middle-static-publication-reactions-item.like');

function likePublication() {
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
}

// Puts focus on comment input when clicking on comment button
let commentBtns = document.querySelectorAll('.main-wrapper-middle-static-publication-reactions-item.comment');

function commentPublication() {
    commentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.parentNode.nextElementSibling.nextElementSibling.querySelector('input').focus();
        })
    })
}


// Allows the user to create publications
function addPublication(message) {
    const publicationGoesHere = document.querySelector('.main-wrapper-middle-new-publication');
    const newPublication = document.createElement("div");
    newPublication.className = 'main-wrapper-middle-static-publication';
    newPublication.innerHTML = "\<div class=\"main-wrapper-middle-static-publication-title\"\> \<img src=\"images/profile-1.jpg\" alt=\"profile pic\" class=\"profile-pic\"\> \<div class=\"main-wrapper-middle-static-publication-title-text\"\> \<p\>Maria Santos\</p\>  \<p\>A l'instant · \<img src=\"images/world.svg\" alt=\"icon\"\>\</p\> \</div\> \<img src=\"images/dots.svg\" alt=\"icon about\" class=\"dots background-on-hover-darker\"\> \</div\> \<div class=\"main-wrapper-middle-static-publication-content\"\> " + "\<p\>" + message + "\</p\> \</div\>    \<div class=\"main-wrapper-middle-static-publication-likes-wrapper\"\> \<img src=\"images/thumb-up-white.svg\" alt=\"thumb up\" class=\"blue\"\> \<p class=\"main-wrapper-middle-static-publication-likes-number\"\> 0\</p\> \</div\> \<div class=\"main-wrapper-middle-static-publication-reactions\"\> \<p class=\"main-wrapper-middle-static-publication-reactions-item like background-on-hover\"\>\<img src=\"images/thumb-up.svg\" alt=\"icon\"\> J'aime \</p\> \<p class=\"main-wrapper-middle-static-publication-reactions-item comment background-on-hover\"\>\<img src=\"images/message-dots.svg\" alt=\"icon\"\> Commenter \</p\> \<p class=\"main-wrapper-middle-static-publication-reactions-item background-on-hover\"\>\<img src=\"images/share.svg\" alt=\"icon\"\> Partager \</p\> \</div\> \<div class=\"main-wrapper-middle-static-publication-written-comments-wrapper\"\>\</div\> \<div class=\"main-wrapper-middle-static-publication-comment\"\> \<img src=\"images/profile-1.jpg\" alt=\"profile pic\" class=\"profile-pic\"\> \<input type=\"text\" placeholder=\"Écrivez un commentaire...\" class=\"comment-input\"\> \<div class=\"main-wrapper-middle-static-publication-comment-options\"\> \<img src=\"images/mood-smile.svg\" alt=\"icon\" class=\"background-on-hover-darkest\"\> \<img src=\"images/camera.svg\" alt=\"icon\" class=\"background-on-hover-darkest\"\> \<img src=\"images/movie.svg\" alt=\"icon\" class=\"background-on-hover-darkest\"\> \<img src=\"images/sticker.svg\" alt=\"icon\" class=\"background-on-hover-darkest\"\> \</div\> \</div\> \</div\>";
    publicationGoesHere.prepend(newPublication);
    newPublication.style.animation = "fadeIn 0.5s linear forwards";
    likeBtns = document.querySelectorAll('.main-wrapper-middle-static-publication-reactions-item.like');
    commentBtns = document.querySelectorAll('.main-wrapper-middle-static-publication-reactions-item.comment');
    getPublicationInputList();
    likePublication();
    commentPublication();
}

// Allows the user to comment publications
function addComment(message) {
    const commentGoesHere = message.parentNode.previousElementSibling;
    const newComment = document.createElement("div");
    newComment.className = 'main-wrapper-middle-static-publication-written-comments';
    newComment.innerHTML = "\<img src=\"images/profile-1.jpg\" alt=\"profile pic\" class=\"profile-pic\"\> \<div class=\"main-wrapper-middle-static-publication-written-comments-text\"\> \<p class=\"written-comment-name\">Maria Santos\</p\> \<p class=\"written-comment-text\"\> "+ message.value + "\</p\>";
    commentGoesHere.append(newComment);
    newComment.style.animation = "fadeIn 0.5s linear forwards";
    message.value = "";
}


// Refreshes the publications inputs list
function getPublicationInputList() {
    let publicationInputList = document.querySelectorAll('.main-wrapper-middle-static-publication-comment');
    publicationInputList.forEach(publi => {
        publi.addEventListener('keyup', e => {
            if (e.key === 'Enter' && e.path[0].value != "") {
                addComment(e.path[0]);
            }
        })
    })
}


  /* ------------------------------------------------------------- */
 /* ------------------- PAGE LOAD BEHAVIOUR --------------------- */
/* ------------------------------------------------------------- */
let publicationInputList = document.querySelectorAll('.main-wrapper-middle-static-publication-comment');

window.addEventListener("DOMContentLoaded", (event) => {
    likePublication();
    commentPublication();
    getPublicationInputList();

    if (window.screen.width <= 535) { //Change search input placeholder text for small screens
        document.querySelector('.navbar-wrapper input').placeholder = "Rechercher";
    }
});