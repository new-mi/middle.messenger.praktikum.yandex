export default {
  contentListTop: [
    {
      icon: 'plus',
      text: 'Добавить пользователя',
      click: `modal.openModal('box-modal-add-user')`
    },
    {
      icon: 'minus',
      text: 'Удалить пользователя',
      click: `modal.openModal('box-modal-remove-user')`
    },
    {
      icon: 'trash',
      text: 'Удалить чат',
      click: `modal.openModal('box-modal-remove-chat')`
    }
  ],
  contentListBottom: [
    {
      icon: 'pictureO',
      text: 'Фото или Видео'
    },
    {
      icon: 'fileO',
      text: 'Файл'
    },
    {
      icon: 'mapMarker',
      text: 'Локация'
    }
  ]
}
