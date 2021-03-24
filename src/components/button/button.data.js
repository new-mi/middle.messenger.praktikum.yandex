export default {
  login: {
    class: 'button--accent enter-form__submit',
    type: 'submit',
    content: 'Авторизоваться'
  },
  registration: {
    class: 'button--accent enter-form__submit',
    type: 'submit',
    content: 'Зарегистрироваться'
  },
  menuBlockButton: {
    class: 'menu-block__button',
    type: 'button'
  },
  formMessage: {
    class: 'form-message__submit',
    type: 'submit'
  },
  addUser: {
    class: 'button--accent',
    type: 'submit',
    content: 'Добавить'
  },
  removeUser: {
    class: 'button--accent',
    type: 'submit',
    content: 'Удалить'
  },
  removeChat: {
    class: 'button--accent',
    type: 'submit',
    content: 'Удалить'
  },
  uploadFile: {
    class: 'button--accent',
    type: 'submit',
    content: 'Поменять'
  },
  profileSave: {
    class: 'button--accent profile-block__button-save',
    type: 'submit',
    content: 'Сохранить'
  },
  avatar: {
    class: 'profile-block__avatar profile-block__avatar--button',
    type: 'button',
    click: `modal.openModal('box-modal-add-file')`
  }
}
