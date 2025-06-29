import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

//     data    //
const validateSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* Elements */

const editOpenButton = document.querySelector(".profile__edit-btn");
const editCloseButton = document.querySelector("#edit-modal-btn");
const addOpenButton = document.querySelector(".profile__add-btn");
const addCloseButton = document.querySelector("#add-modal-btn");
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const profileNameInput = document.querySelector("#nameInput");
const profileBioInput = document.querySelector("#bioInput");
const profileForm = document.forms["edit-modal-submit"];
const newCardForm = document.forms["add-modal-submit"];
const cardGallery = document.querySelector(".gallery__container");
const previewModalDisplay = document.querySelector("#picture-modal");
const previewCloseButton = document.querySelector(".modal__picture-close-btn");
const newCardTitle = document.querySelector("#titleInput");
const newCardUrl = document.querySelector("#urlInput");
const popupOverlays = document.querySelectorAll(".modal");
const pictureModal = document.querySelector(".modal__picture-container");
const profileModal = document.querySelector(".modal__container");
const editModalDisplay = document.querySelector("#edit-modal");
const addModalDisplay = document.querySelector("#add-modal");

// validate //
const editFormValidation = new FormValidator(
  validateSettings,
  editModalDisplay
);
const addFormValidation = new FormValidator(validateSettings, addModalDisplay);
editFormValidation.enableValidation();
addFormValidation.enableValidation();

/* Opening and closing of modal */
function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileBioInput.value = profileBio.textContent;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}

/* Opening & closing events for modals */
editOpenButton.addEventListener("click", () => {
  openModal(editModalDisplay);
  fillProfileForm();
});

editCloseButton.addEventListener("click", () => closeModal(editModalDisplay));
addOpenButton.addEventListener("click", () => openModal(addModalDisplay));
addCloseButton.addEventListener("click", () => closeModal(addModalDisplay));
previewCloseButton.addEventListener("click", () =>
  closeModal(previewModalDisplay)
);


// render //
function renderCard(data) {
  const cardElement = new Card(data, '#cardTemplate').getView();
  cardGallery.prepend(cardElement);
}

/* Loop for rendering cards */
initialCards.forEach((data) => {
  renderCard(data);
});

/* Profile Edits */
function submitProfile(event) {
  profileName.textContent = profileNameInput.value;
  profileBio.textContent = profileBioInput.value;
  editFormValidation.resetValidation();
  closeModal(editModalDisplay);
  event.preventDefault();
}

function submitNewCard(event) {
  const newCard = {
    name: "",
    link: "",
  };
  newCard.name = newCardTitle.value;
  newCard.link = newCardUrl.value;
  renderCard(newCard);
  newCardTitle.value = "";
  newCardUrl.value = "";
  /* set user added pictures */
  addFormValidation.resetValidation();
  closeModal(addModalDisplay);
  event.preventDefault();
}

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    closeModal(openedPopup);
  }
}

popupOverlays.forEach((popupOverlay) => {
  popupOverlay.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      closeModal(popupOverlay);
    }
  });
});

/* Event handlers */
profileForm.addEventListener("submit", submitProfile);
newCardForm.addEventListener("submit", submitNewCard);
