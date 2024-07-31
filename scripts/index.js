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
const editModalDisplay = document.querySelector("#edit-modal");
const addModalDisplay = document.querySelector("#add-modal");
const editOpenEvent = document.querySelector(".profile__edit-btn");
const editCloseEvent = document.querySelector("#edit-modal-btn");
const addOpenEvent = document.querySelector(".profile__add-btn");
const addCloseEvent = document.querySelector("#add-modal-btn");
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const profileNameInput = document.querySelector("#nameInput");
const profileBioInput = document.querySelector("#bioInput");
const newCardTitle = document.querySelector("#titleInput");
const newCardUrl = document.querySelector("#urlInput");
const saveProfile = document.querySelector("#edit-modal-submit");
const saveNewCard = document.querySelector("#add-modal-submit");
const cardGallery = document.querySelector(".gallery__container");

/* Opening and closing of modal */
function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileBioInput.value = profileBio.textContent;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}
editOpenEvent.addEventListener("click", () => openModal(editModalDisplay));
editOpenEvent.addEventListener("click", fillProfileForm);
editCloseEvent.addEventListener("click", () => closeModal(editModalDisplay));
addOpenEvent.addEventListener("click", () => openModal(addModalDisplay));
addCloseEvent.addEventListener("click", () => closeModal(addModalDisplay));

/* function for cloning card */
function getCardElement(data) {
  /* setting template & elements */
  const cardTemplate = document.querySelector("#cardTemplate").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  /* setting content of cards */
  cardElement.querySelector(".card__image").src = data.link;
  cardElement.querySelector(".card__title").textContent = data.name;
  cardElement.querySelector(".card__image").alt = data.name;
  const likeButton = cardElement.querySelector(".card__btn");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__btn_dark");
  });
  const deleteButton = cardElement.querySelector(".card__delete-btn");

  deleteButton.addEventListener("click", () => {
    deleteButton.parentElement.classList.toggle("card_delete");
  });

  return cardElement;
}

/*
previewOpenEvent() {
  openModal(previewModalDisplay);
}
  */
function renderCard(data) {
  const cardElement = getCardElement(data);
  cardGallery.prepend(cardElement);
}

/* Sprint 5 code */
/* Task 1 loop rewrite */
initialCards.forEach((data) => {
  renderCard(data);
});

/* Profile Edits */
function submitProfile(event) {
  profileName.textContent = profileNameInput.value;
  profileBio.textContent = profileBioInput.value;
  closeModal(editModalDisplay);
  event.preventDefault();
}

function submitNewCard(event) {
  const cardTemplate = document.querySelector("#cardTemplate").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = newCardUrl.value;
  cardElement.querySelector(".card__title").textContent = newCardTitle.value;
  cardElement.querySelector(".card__image").alt = newCardTitle.value;
  const likeButton = cardElement.querySelector(".card__btn");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__btn_dark");
  });
  const deleteButton = cardElement.querySelector(".card__delete-btn");

  deleteButton.addEventListener("click", () => {
    deleteButton.parentElement.classList.toggle("card_delete");
  });
  cardGallery.prepend(cardElement);
  closeModal(addModalDisplay);
  event.preventDefault();
}
saveProfile.addEventListener("submit", submitProfile);
saveNewCard.addEventListener("submit", submitNewCard);

/* Task 4 */

/* Task 5 */
