import PopupWithForm from "./PopupWithForm"
import { useState, useEffect } from "react";

export default function AddPlacePopup({ onAddPlace, isOpen, onClose, isLoading }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleLink(e) {
    setLink(e.target.value);
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen])

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      buttonText={isLoading ? 'Сохранение...' : 'Создать'}
      ariaLabel="Закрыть окно редактирования карточки"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input id="place-input" className="popup__input popup__input_type_place" value={name} onChange={handleName} type="text" name="place"
        placeholder="Название" minLength="2" maxLength="30" required />
      <span className="popup__input-error place-input-error"></span>
      <input id="src-input" className="popup__input popup__input_type_src" value={link} onChange={handleLink} type="url" name="url"
        placeholder="Ссылка на картинку" required />
      <span className="popup__input-error src-input-error"></span>
    </PopupWithForm>
  )
}