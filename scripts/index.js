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
const modDisplay = document.querySelector(".modal");
const openEvent = document.querySelector(".profile__edit-btn");
const closeEvent = document.querySelector(".modal__close-btn");
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const profileNameInput = document.querySelector("#nameInput");
const profileBioInput = document.querySelector("#bioInput");
const saveProfile = document.querySelector(".modal__form");
const cardGallery = document.querySelector(".gallery__container");

/* Opening and closing of modal */
function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileBioInput.value = profileBio.textContent;
}
function openModal() {
  fillProfileForm();
  modDisplay.classList.add("modal_opened");
}
function closeModal() {
  modDisplay.classList.remove("modal_opened");
}
openEvent.addEventListener("click", openModal);
closeEvent.addEventListener("click", closeModal);

/* Profile Edits */
function submitProfile(event) {
  profileName.textContent = profileNameInput.value;
  profileBio.textContent = profileBioInput.value;
  closeModal();
  event.preventDefault();
}
saveProfile.addEventListener("submit", submitProfile);

/* function for cloning card */
function getCardElement(data) {
  /* setting template & elements */
  const cardTemplate = document.querySelector("#cardTemplate").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  /* setting content of cards */
  cardElement.querySelector(".card__image").src = data.link;
  cardElement.querySelector(".card__title").textContent = data.name;
  cardElement.querySelector(".card__image").alt = data.name;
  return cardElement;
}

function renderCard(data) {
  const cardElement = getCardElement(data);
  cardGallery.prepend(cardElement);
}

/* Loop for generating cards off template function */
for (const card of initialCards) {
  /* appending card into html gallery container from function */
  renderCard(card);
}
