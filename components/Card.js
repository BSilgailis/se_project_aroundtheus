export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    //like button event listener
    this._cardElement
      .querySelector(".card__btn")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    //delete button event listener
    this._cardElement
      .querySelector(".card__delete-btn")
      .addEventListener("click", () => {
        this._handleDeleteIcon();
      });

      this._cardElement.addEventListener('click', () => {
        this._handleImageClick(this);
      });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__btn")
      .classList.toggle("card__btn_dark");
  }

  _handleDeleteIcon() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getView() {
    //get the card template
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    //set card values
      const cardImage = this._cardElement.querySelector('.card__image');
      cardImage.src = this._link;
      cardImage.alt = `Image of ${this._name}`;

      const cardName = this._cardElement.querySelector('.card__title');
      cardName.textContent = this._name;
    // set event listeners
    this._setEventListeners();
    // return the card
    return this._cardElement;
  }
}
