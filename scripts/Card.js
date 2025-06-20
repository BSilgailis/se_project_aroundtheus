export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    //like button
    this._cardElement
      .querySelector(".card__btn")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    //delete button
    this._cardElement
      .querySelector(".card__delete-btn")
      .addEventListener("click", () => {
        this._handleDeleteIcon();
      });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__btn")
      .classList.toggle(".card__btn_dark");
  }

  _handleDeleteIcon() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getView() {
    //get the card view
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    // set event listeners
    this._setEventListeners();
    // return the card
  }
}
