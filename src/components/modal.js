function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}

function closeModel(popup) {
    popup.classList.remove('popup_is-opened');
}

export { openModal, closeModel };