import { openModal } from "./modal";
import { imagePopup, cardTemplate, mainImage, imagePopupCaption } from "./index";

const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

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

export { createCard, initialCards };