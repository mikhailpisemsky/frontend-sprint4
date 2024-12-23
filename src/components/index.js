import { createCard, initialCards } from "./cards";
import { openModal, closeModel } from "./modal";
import { enableValidation } from "./validate";
import '../pages/index.css';
import "../vendor/normalize.css";
export const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const popups = document.querySelectorAll('.popup');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profilePopup = document.querySelector('.popup_type_edit');
profilePopup.classList.add('.popup_is-animated');
const profileFormElement = profilePopup.querySelector('.popup__form');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
nameInput.setAttribute("minlength", 2);
nameInput.setAttribute("maxlength", 40);
const jobInput = profileFormElement.querySelector('.popup__input_type_description');
jobInput.setAttribute('minlength', 2);
jobInput.setAttribute('maxlength', 200);
const cardPopup = document.querySelector('.popup_type_new-card');
cardPopup.classList.add('.popup_is-animated');
const cardFormElemnt  = cardPopup.querySelector('.popup__form');
const cardName = cardPopup.querySelector('.popup__input_type_card-name');
cardName.setAttribute("minlength", 2);
cardName.setAttribute('maxlength', 30);
const cardUrl = cardPopup.querySelector('.popup__input_type_url');
export const imagePopup = document.querySelector('.popup_type_image');
imagePopup.classList.add('.popup_is-animated');
export const mainImage = imagePopup.querySelector('.popup__image');
export const imagePopupCaption = imagePopup.querySelector('.popup__caption');

const createCardButton = document.querySelector('.profile__add-button');

const profileEditButton = document.querySelector('.profile__edit-button');

profileEditButton.addEventListener('click', function() {
    nameInput.value = profileName.textContent
    jobInput.value = profileDescription.textContent
    openModal(profilePopup)
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModel(profilePopup)
}

document.addEventListener("keydown", closeByEsc);

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

createCardButton.addEventListener('click', function() {
    openModal(cardPopup)
});

const popupClose = document.querySelectorAll('.popup__close');

popupClose.forEach(function (item) {
    item.addEventListener('click', function() {
        closeModel(item.closest('.popup'))
    })
});


function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = {
        name: cardName.value,
        link: cardUrl.value
    }
    placesList.prepend(createCard(newCard))
    cardName.value = ''
    cardUrl.value = ''
    closeModel(cardPopup)
};

popups.forEach(function(popup) {
    popup.addEventListener("click", (evt) => {
        if (evt.currentTarget === evt.target) {
            closeModel(popup)
        }
    });
})

function closeByEsc(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModel(openedPopup);
} }

cardFormElemnt.addEventListener('submit', handleCardFormSubmit);

initialCards.forEach(function (item) {
    placesList.append(createCard(item))
});


enableValidation();