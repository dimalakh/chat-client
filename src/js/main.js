let a = 15;

// define body object
const bodyObject = document.querySelector('body');

// define user menu (sidebar)
const aside = document.querySelector('aside');

// define chat part of app
const section = document.querySelector('section');

// define sidebar toggle button
const asideToggler = document.querySelector('#aside-toggler');

// define burger-menu toggle button
const menuButton = document.querySelector('#menu-toggler');

// define conversation-menu button
const conversationButton = document.querySelector('#conversation-menu');

// define general context-menu button
const genneralMenuButton = document.querySelector('#general-menu');

// define message input field 
const messageBox = document.querySelector('#message-box');

// define emoji toggle button
const emojiButton = document.querySelector('#smiles-button');

// define empty popup window
const popUpWindow = document.querySelector('#pop-up');



asideToggler.addEventListener('click', asideToggle);
messageBox.addEventListener('keydown', messageDenyEnter);
messageBox.addEventListener('focus', messagePlaceholderClear);
messageBox.addEventListener('focusout', messagePlaceholder);
emojiButton.addEventListener('click', popUpToggle);
menuButton.addEventListener('click', popUpToggle);
conversationButton.addEventListener('click', popUpToggle);
genneralMenuButton.addEventListener('click', popUpToggle);



// togle sidebar
function asideToggle(){
    aside.classList.toggle('toggled');
    section.classList.toggle('toggled');
    popUpClose();
}

// display pop-up window and calculate position
function popUpToggle(e){
     e.preventDefault();
     var clickedObject = this.getBoundingClientRect();
     popUpWindow.classList.toggle('active');
     popUpWindow.style.top = (clickedObject.top + clickedObject.height) + 'px';
     popUpWindow.style.left = clickedObject.left + 'px';
}

// close pop-up window
function popUpClose(){
    if(popUpWindow.classList.contains('active')){
        popUpWindow.classList.remove('active');
    }
}

// disable hyphenation to new line when user press enter 
function messageDenyEnter(e){
    if (e.keyCode === 13) {
        e.preventDefault();
    }
}

// clear contenteditable div 
function messagePlaceholderClear(){
    if(messageBox.innerText === 'Type your message..'){
        messageBox.innerText = '';
    }
}

// put placeholder in contenteditable div if div is empty
function messagePlaceholder(){
    if(messageBox.textContent == ''){
        messageBox.textContent = 'Type your message..';
    }
}