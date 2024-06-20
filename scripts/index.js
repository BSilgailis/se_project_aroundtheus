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
let modDisplay = document.querySelector(".modal");
let openEvent = document.querySelector(".profile__edit-btn");
let closeEvent = document.querySelector(".modal__close-btn");
let profileName = document.querySelector(".profile__name");
let profileBio = document.querySelector(".profile__bio");
let profileNameInput = document.querySelector("#nameInput");
let profileBioInput = document.querySelector("#bioInput");
let saveProfile = document.querySelector(".modal__form");

/* Opening and closing of modal */
function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileBioInput.value = profileBio.textContent;
}
function modalOpen() {
  fillProfileForm();
  modDisplay.classList.add("modal_opened");
}
function modalClose() {
  modDisplay.classList.remove("modal_opened");
}
openEvent.addEventListener("click", modalOpen);
closeEvent.addEventListener("click", modalClose);

/* Profile Edits */
function profileSubmit(event) {
  profileName.textContent = profileNameInput.value;
  profileBio.textContent = profileBioInput.value;
  modDisplay.classList.remove("modal_opened");
  event.preventDefault();
}
saveProfile.addEventListener("submit", profileSubmit);

/* function for cloning card */
function getCardElement(card) {
  /* setting template & elements */
  let cardGallery = document.querySelector(".gallery__container");
  let cardTemplate = document.querySelector("#cardTemplate").content;
  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  /* setting content of cards */
  cardElement.querySelector(".card__image").src = initialCards[card].link;
  cardElement.querySelector(".card__title").textContent =
    initialCards[card].name;
  cardElement.querySelector(".card__image").alt = initialCards[card].name;
  cardGallery.append(cardElement);
}
/* Loop for generating cards off template function */
for (card in initialCards) {
  /* appending card into html gallery container from function */
  getCardElement(card);
}
