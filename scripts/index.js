const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profilePopup = document.querySelector('.popup_type_edit');
profilePopup.classList.add('.popup_is-animated');
const profileFormElement = profilePopup.querySelector('.popup__form');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_description');
const cardPopup = document.querySelector('.popup_type_new-card');
cardPopup.classList.add('.popup_is-animated');
const cardFormElemnt  = cardPopup.querySelector('.popup__form');
const cardName = cardPopup.querySelector('.popup__input_type_card-name');
const cardUrl = cardPopup.querySelector('.popup__input_type_url');
const imagePopup = document.querySelector('.popup_type_image');
imagePopup.classList.add('.popup_is-animated');
const mainImage = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');

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

function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}

function closeModel(popup) {
    popup.classList.remove('popup_is-opened');
}

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

cardFormElemnt.addEventListener('submit', handleCardFormSubmit);

function createCard(cardContent) {
    const newCard = cardTemplate.cloneNode(true);
    const cardImage = newCard.querySelector('.card__image');
    cardImage.src = cardContent.link;
    cardImage.alt = cardContent.name;
    const cardTitle = newCard.querySelector('.card__title');
    cardTitle.textContent = cardContent.name;
    const cardLikeButton = newCard.querySelector('.card__like-button');
    const cardDeleteButton = newCard.querySelector('.card__delete-button');

    cardImage.addEventListener('click', function() {
        mainImage.src = cardImage.src
        imagePopupCaption.textContent = cardImage.alt
        openModal(imagePopup)
    });

    cardLikeButton.addEventListener('click', function() {
        cardLikeButton.classList.toggle('card__like-button_is-active')
    });

    cardDeleteButton.addEventListener('click', function() {
        cardDeleteButton.closest('.card').remove()
    });

    return newCard;
}

initialCards.forEach(function (item) {
    placesList.append(createCard(item))
});